import { useState } from "react";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import { gql, useSubscription, useMutation } from "@apollo/client";
import React from "react";
import ReactLoading from "react-loading";

const SubcriptionPengunjung = gql`
  subscription MySubscription {
    pengunjung_data {
      id
      jenis_kelamin
      nama
      umur
    }
  }
`;

const CreateData = gql`
  mutation MyMutation($objects: [pengunjung_data_insert_input!] = {}) {
    insert_pengunjung_data(objects: $objects) {
      returning {
        id
        jenis_kelamin
        nama
        umur
      }
    }
  }
`;

const UpdateData = gql`
  mutation MyMutation($id: Int!, $id_user: Int!, $jenis_kelamin: String!, $nama: String!, $umur: Int!) {
    update_pengunjung_data(where: { id: { _eq: $id } }, _set: { id: $id, id_user: $id_user, jenis_kelamin: $jenis_kelamin, nama: $nama, umur: $umur }) {
      returning {
        id
        jenis_kelamin
        nama
        umur
      }
    }
  }
`;

const DeleteDataById = gql`
  mutation MyMutation($id: Int!) {
    delete_pengunjung_data(where: { id: { _eq: $id } }) {
      returning {
        id_user
        jenis_kelamin
        nama
        umur
      }
    }
  }
`;

const Home = () => {
  // const [getData, { data, loading, refetch }] = useLazyQuery(GetData);
  const { data, loading } = useSubscription(SubcriptionPengunjung);

  const [createData, { loading: loadingInsert }] = useMutation(CreateData);
  const [updateData, { loading: loadingUpdate }] = useMutation(UpdateData);
  const [deleteData, { loading: loadingDelete }] = useMutation(DeleteDataById);

  const [formData, setFormData] = useState({
    id: 0,
    nama: "",
    umur: 0,
    jenisKelamin: "pria",
    idUser: 0,
    editing: true,
  });

  if (loading || loadingDelete || loadingInsert || loadingUpdate) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ReactLoading color="#FF0000" height={100} width={100} />
      </div>
    );
  }

  const hapusPengunjung = async (id) => {
    await deleteData({
      variables: {
        id: id,
      },
    });
  };

  const handleChangeFormData = (label, newValue) => {
    setFormData({
      ...formData,
      [label]: newValue,
    });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const dataLocation = data?.pengunjung_data.findIndex((pengunjung) => pengunjung.id === +formData.id);
    if (dataLocation >= 0) {
      await updateData({
        variables: {
          id: +formData.id,
          nama: formData.nama,
          id_user: +formData.idUser,
          umur: +formData.umur,
          jenis_kelamin: formData.jenisKelamin,
        },
      });
    } else {
      await createData({
        variables: {
          objects: {
            id: +formData.id,
            nama: formData.nama,
            id_user: +formData.idUser,
            umur: +formData.umur,
            jenis_kelamin: formData.jenisKelamin,
          },
        },
      });
    }
  };

  const handleBukaInput = () => {
    setFormData({
      ...formData,
      editing: false,
    });
  };

  const handleTutupInput = () => {
    setFormData({
      ...formData,
      editing: true,
    });
  };

  return (
    <div>
      <Header />
      <ListPassenger data={data} hapusPengunjung={hapusPengunjung} loadingDelete={loadingDelete} />
      <PassengerInput handleSubmit={handleSubmit} handleChangeFormData={handleChangeFormData} handleBukaInput={handleBukaInput} handleTutupInput={handleTutupInput} formData={formData} />
    </div>
  );
};

export default Home;
