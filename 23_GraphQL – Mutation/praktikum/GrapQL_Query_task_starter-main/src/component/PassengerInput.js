import "./Home.css";

import React from "react";

function PassengerInput({ handleTutupInput, handleBukaInput, formData, handleSubmit, handleChangeFormData }) {
  const { id, nama, umur, jenisKelamin, idUser } = formData;

  let viewMode = {};
  let editMode = {};

  if (formData.editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  return (
    <div>
      <div onSubmit={handleSubmit} style={viewMode}>
        <p>Masukkan ID</p>
        <input type="number" className="input-text" value={id} onChange={(ev) => handleChangeFormData("id", ev.currentTarget.value)} />
        <p>Masukkan Nama Anda</p>
        <input type="text" className="input-text" placeholder="Nama anda ..." value={nama} onChange={(ev) => handleChangeFormData("nama", ev.currentTarget.value)} />
        <p>Masukkan Umur Anda</p>
        <input type="number" className="input-text" value={umur} onChange={(ev) => handleChangeFormData("umur", ev.currentTarget.value)} />
        <p>Masukkan Jenis Kelamin Anda</p>
        <select value={jenisKelamin} onChange={(ev) => handleChangeFormData("jenisKelamin", ev.currentTarget.value)}>
          <option value="Pria" selected>
            Pria
          </option>
          <option value="Wanita">Wanita</option>
        </select>
        <p>Masukkan User ID</p>
        <input type="number" className="input-text" value={idUser} onChange={(ev) => handleChangeFormData("idUser", ev.currentTarget.value)} />
        <p></p>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={() => handleTutupInput()} style={{ marginLeft: "10px" }}>
          Selesai
        </button>
      </div>
      <button className="inputan" onClick={() => handleBukaInput()} style={editMode}>
        Masukkan Nama Pelanggan
      </button>
    </div>
  );
}

export default PassengerInput;
