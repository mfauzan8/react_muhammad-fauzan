import { useState } from "react";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import { gql, useLazyQuery, useQuery } from "@apollo/client";
import React from "react";

// const GetData = gql`
//   query MyQuery($id_user: Int!) {
//     pengunjung_data(where: { id_user: { _eq: $id_user } }) {
//       id
//       jenis_kelamin
//       nama
//       umur
//     }
//   }
// `;

const GetData = gql`
  query MyQuery {
    pengunjung_data {
      id
      jenis_kelamin
      nama
      umur
    }
  }
`;

const Home = () => {
  // const [getData, { data, loading, error }] = useLazyQuery(GetData);
  const { data, loading, error } = useQuery(GetData);
  const [idUser, setIdUser] = useState(0);

  const onChangeIdUser = (e) => {
    if (e.target) {
      setIdUser(e.target.value);
    }
  };

  // const onGetData = () => {
  //   getData({
  //     variables: {
  //       id_user: idUser,
  //     },
  //   });
  // };

  //   const hapusPengunjung = (id) => {
  //     setData({
  //       data: [
  //         ...data.filter((item) => {
  //           return item.id !== id;
  //         }),
  //       ],
  //     });
  //   };

  //   const tambahPengunjung = (newUser) => {
  //     const newData = {
  //       id: uuidv4(),
  //       ...newUser,
  //     };
  //     setData({
  //       data: [...data, newData],
  //     });
  //   };
  return (
    <div>
      <Header />
      <div>
        <p>Get Data By User ID</p>
        <form style={{ marginBottom: "5px" }}>
          <label>
            User ID:
            <input value={idUser} onChange={onChangeIdUser} />
          </label>
          <button>Get Data</button>
        </form>
      </div>
      <ListPassenger
        data={data}
        //   hapusPengunjung={hapusPengunjung}
      />
      <PassengerInput
      //   tambahPengunjung={tambahPengunjung}
      />
    </div>
  );
};

export default Home;
