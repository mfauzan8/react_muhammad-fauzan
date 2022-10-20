import { useState } from "react";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import { gql, useLazyQuery, useMutation } from "@apollo/client";
import React from "react";
import ReactLoading from "react-loading";

const GetData = gql`
  query MyQuery($id_user: Int!) {
    pengunjung_data(where: { id_user: { _eq: $id_user } }) {
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
  const [getData, { data, loading, refetch }] = useLazyQuery(GetData);
  const [createData, { loading: loadingInsert }] = useMutation(CreateData);
  const [updateData, { loading: loadingUpdate }] = useMutation(UpdateData);
  const [deleteData, { loading: loadingDelete }] = useMutation(DeleteDataById);

  const [idUser, setIdUser] = useState(0);
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

  const onChangeIdUser = (e) => {
    if (e.target) {
      setIdUser(e.target.value);
    }
  };

  const onGetData = (e) => {
    e.preventDefault();
    getData({
      variables: {
        id_user: idUser,
      },
    });
  };

  const hapusPengunjung = async (id) => {
    await deleteData({
      variables: {
        id: id,
      },
    });
    refetch();
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
    refetch();
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
      <div>
        <p>Get Data By User ID</p>
        <form>
          <label>
            User ID:
            <input value={idUser} onChange={onChangeIdUser} />
          </label>
          <button onClick={onGetData}>Get Data</button>
        </form>
      </div>
      <ListPassenger data={data} hapusPengunjung={hapusPengunjung} loadingDelete={loadingDelete} />
      <PassengerInput handleSubmit={handleSubmit} handleChangeFormData={handleChangeFormData} handleBukaInput={handleBukaInput} handleTutupInput={handleTutupInput} formData={formData} />
    </div>
  );
};

export default Home;
