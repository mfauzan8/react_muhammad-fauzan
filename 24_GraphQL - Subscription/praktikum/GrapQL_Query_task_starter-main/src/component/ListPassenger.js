import ListItem from "./ListItem";

import React from "react";

const ListPassenger = ({ data, hapusPengunjung, loadingDelete }) => {
  return (
    <div>
      <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
        <thead>
          <td>Id</td>
          <td>Nama</td>
          <td>Umur</td>
          <td>Jenis Kelamin</td>
          <td>Aksi</td>
        </thead>
        {data?.pengunjung_data.map((item) => (
          <ListItem key={item.id} item={item} hapusPengunjung={hapusPengunjung} loadingDelete={loadingDelete} />
        ))}
      </table>
    </div>
  );
};

export default ListPassenger;
