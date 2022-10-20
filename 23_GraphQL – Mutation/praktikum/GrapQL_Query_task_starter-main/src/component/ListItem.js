import "./Home.css";

import React from "react";

const ListItem = ({ item, hapusPengunjung, loadingDelete }) => {
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.nama}</td>
      <td>{item.umur}</td>
      <td>{item.jenis_kelamin}</td>
      <td>
        <button onClick={() => hapusPengunjung(item.id)}>Hapus</button>
      </td>
    </tr>
  );
};

export default ListItem;
