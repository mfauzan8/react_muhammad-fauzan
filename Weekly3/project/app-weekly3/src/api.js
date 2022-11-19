import axios from "axios";

export const client = axios.create({
  baseURL: "https://valid-pheasant-86.hasura.app/api/rest/aboutus",
  headers: {
    "x-hasura-admin-secret": "hPG4LHAScSbz2EtThbxU646IlBEEa89PU0C5F64M7lgibO6xzJp13uHdZbimAv7a",
  },
});

export const getUsers = async () => {
  const response = await client.get("/");
  return response.data.about_us_users;
};

export const clientPublic = axios.create({
  baseURL: "https://fakerapi.it/api/v1/images?_quantity=9&_type=kittens&_height=300"
});

export const getFruits = async () => {
  const responses = await clientPublic.get("/");
  return responses.data.data
}