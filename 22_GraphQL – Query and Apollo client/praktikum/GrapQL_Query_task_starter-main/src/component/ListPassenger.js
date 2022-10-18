import ListItem from "./ListItem";

import React from "react";

const ListPassenger = ({ data, hapusPengunjung }) => {
  return (
    <div>
      <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
        <thead bgcolor="red">
          <td>Nama</td>
          <td>Umur</td>
          <td>Jenis Kelamin</td>
          <td bgcolor="white" className="removeBorder"></td>
        </thead>
        {data?.pengunjung_data.map((item) => (
          <ListItem key={item.id} item={item} hapusPengunjung={hapusPengunjung} />
        ))}
      </table>
    </div>
  );
};

export default ListPassenger;
