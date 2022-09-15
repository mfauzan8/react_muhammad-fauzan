import Header from "./component/Header";
import Task from "./component/Task";


function ToDoListPage({lists}){
    return(
    <>
        <Header/>
        {lists.map((list, index)=> <Task list={list} key={index}/>)}
    </>
    )
}

export default ToDoListPage;