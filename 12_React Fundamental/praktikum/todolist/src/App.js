import { mockTask } from "./mocData";
import ToDoListPage from "./pages/ToDoListPage";


function App() {
  return (
    <ToDoListPage lists={mockTask}/> 
  )
}

export default App;
