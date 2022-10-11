import axios from "axios";

export const client = axios.create({
  baseURL: "https://valid-pheasant-86.hasura.app/api/rest/todo",
  headers: {
    "x-hasura-admin-secret": "hPG4LHAScSbz2EtThbxU646IlBEEa89PU0C5F64M7lgibO6xzJp13uHdZbimAv7a",
  },
});

export const getTask = async () => {
  const response = await client.get("/");
  return response.data.praktikum_todo;
};
