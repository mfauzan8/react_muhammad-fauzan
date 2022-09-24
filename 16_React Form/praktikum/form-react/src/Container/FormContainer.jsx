import FormApp from "../Component/FormApp";
import React, { useState, useRef } from "react";

export const FormContainer = () => {
  const emptyData = {
    nama: "",
    email: "",
    nomorHp: "",
    pendidikan: "",
    kelas: "",
    harapan: "",
  };

  const [formData, setFormData] = useState(emptyData);
  const [errMsgNama, setErrMsgNama] = useState("");
  const [errMsgEmail, setErrMsgEmail] = useState("");
  const [errMsgNoHp, setErrMsgNoHp] = useState("");
  const fotoSurat = useRef(null);
  const regex = /^[A-Za-z ]*$/;

  const handleInputChange = (ev) => {
    const name = ev.target.name;
    const value = ev.target.value;
    const form = ev.currentTarget;

    if (name === "email") {
      if (form.validity.valid) {
        setErrMsgEmail("");
      } else {
        setErrMsgEmail("Email Tidak Sesuai");
      }
    }
    if (name === "nama") {
      if (regex.test(value)) {
        setErrMsgNama("");
      } else {
        setErrMsgNama("Nama harus berupa huruf");
      }
    }
    if (name === "nomorHp") {
      if (form.validity.valid) {
        setErrMsgNoHp("");
      } else {
        setErrMsgNoHp("Nomor Hp Tidak Sesuai");
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleInputSubmit = (ev) => {
    if ((errMsgNama, errMsgEmail, errMsgNoHp !== "")) {
      alert("Terdapat data yang tidak sesuai");
    } else {
      alert("Data Pendaftar " + formData.nama + " Berhasil Diterima.");
    }
    ev.preventDefault();
  };

  return (
    <FormApp
      nama={formData.nama}
      email={formData.email}
      nomorHp={formData.nomorHp}
      pendidikan={formData.pendidikan}
      kelas={formData.kelas}
      harapan={formData.harapan}
      fotoSurat={fotoSurat}
      handleInputChange={handleInputChange}
      errMsgNama={errMsgNama}
      errMsgEmail={errMsgEmail}
      errMsgNoHp={errMsgNoHp}
      handleInputSubmit={handleInputSubmit}
    />
  );
};
export default FormContainer;
