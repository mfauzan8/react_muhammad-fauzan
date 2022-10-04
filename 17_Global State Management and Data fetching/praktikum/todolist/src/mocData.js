import { v4 as uuidv4 } from "uuid";
export const mockTask = [
  {
    id: uuidv4(),
    title: "Membuat Komponen",
    completed: true,
  },
  {
    id: uuidv4(),
    title: "Unit Testing",
    completed: false,
  },
  {
    id: uuidv4(),
    title: "Setup Development Environment",
    completed: true,
  },
  {
    id: uuidv4(),
    title: "Deploy ke server",
    completed: false,
  },
];
