import AddTask from "./AddTask";
import ListTask from "./ListTask";

function Home() {
  return (
    <div className="container">
      <p>To Do App</p>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default Home;
