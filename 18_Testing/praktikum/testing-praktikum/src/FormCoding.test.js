import React from "react";
import FormCoding from "./FormCoding";
import { render, screen, fireEvent } from "@testing-library/react";

describe("FormCodingPage", () => {
  test("render FormCodingPage component", () => {
    render(<FormCoding />);

    expect(screen.getByLabelText(/Latar Belakang Pendidikan:/)).toBeInTheDocument();
    expect(screen.getByText("Pendaftaran Peserta Coding Bootcamp")).toBeInTheDocument();
  });

  test("input text for Nama Lengkap", () => {
    render(<FormCoding />);

    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), { target: { value: "Fauzan" } });
    expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("Fauzan");
  });

  test("Detect Error for Email", () => {
    render(<FormCoding />);

    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), { target: { value: "Fauzan" } });
    expect(screen.getByLabelText(/Email:/)).toHaveValue("Fauzan");
    expect(screen.getByText("Email Tidak Sesuai")).toBeInTheDocument();
  });
});
