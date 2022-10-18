import "./Home.css";

import React from "react";

const ListItem = ({ item, hapusPengunjung }) => {
  return (
    <tr>
      <td>{item.nama}</td>
      <td>{item.umur}</td>
      <td>{item.jenis_kelamin}</td>
      <td className="removeBorder" onClick={() => hapusPengunjung(item.id)}>
        <button>Hapus</button>
      </td>
    </tr>
  );
};

export default ListItem;
