import { useState } from "react";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import { gql, useQuery } from "@apollo/client";
import React from "react";

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
  const { data, loading, error } = useQuery(GetData);

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
