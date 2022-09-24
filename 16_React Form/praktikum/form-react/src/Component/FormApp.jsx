import { Form, Stack, Button, Alert } from "react-bootstrap";

export const FormApp = ({ nama, email, nomorHp, fotoSurat, harapan, kelas, handleInputChange, errMsgNama, errMsgEmail, errMsgNoHp, handleInputSubmit }) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="m-3">Pendaftaran Peserta Coding Bootcamp</h1>
      <Form onSubmit={handleInputSubmit}>
        <Form.Group className="mb-2">
          <Form.Label>Nama Lengkap :</Form.Label>
          <Form.Control name="nama" type="text" value={nama} onChange={(ev) => handleInputChange(ev)} required />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Email :</Form.Label>
          <Form.Control name="email" type="email" placeholder="ex: name@example.com" value={email} onChange={(ev) => handleInputChange(ev)} required />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Nomor Handphone :</Form.Label>
          <Form.Control name="nomorHp" type="number" min="9" value={nomorHp} onChange={(ev) => handleInputChange(ev)} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Latar Belakang Pendidikan</Form.Label>
          <Stack gap={2} direction="horizontal">
            <Form.Check name="pendidikan" type="radio" label="IT" value="IT" required onChange={(ev) => handleInputChange(ev)} />
            <Form.Check name="pendidikan" type="radio" label="Non IT" value="NonIT" required onChange={(ev) => handleInputChange(ev)} />
          </Stack>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Kelas Coding yang dipilih :</Form.Label>
          <Form.Select name="kelas" onChange={(ev) => handleInputChange(ev)} required>
            <option>Pilih Salah Satu Program</option>
            <option value="Golang">Coding Backend with Golang</option>
            <option value="ReactJS">Coding Frontend with ReactJS</option>
            <option value="Fullstack">Fullstack Developer</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Foto Surat Kesungguhan</Form.Label>
          <Form.Control type="file" ref={fotoSurat} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Harapan Untuk Coding Bootcamp Ini : </Form.Label>
          <Form.Control as="textarea" rows={3} name="harapan" value={harapan} onChange={(ev) => handleInputChange(ev)} />
        </Form.Group>
        {errMsgNama || errMsgEmail || errMsgNoHp ? (
          <Alert variant="danger">
            {errMsgNama} <br />
            {errMsgEmail} <br />
            {errMsgNoHp}
          </Alert>
        ) : null}
        <Button className="me-3" variant="success" type="submit">
          Submit
        </Button>
        <Button variant="danger">Reset</Button>
      </Form>
    </div>
  );
};
export default FormApp;
