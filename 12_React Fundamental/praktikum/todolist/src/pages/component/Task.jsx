import '../../App.css';

function Task ({list}) {
    const completed = list.completed;
    if(completed === true) {
        return <button className='taskFalse'>{list.title}</button>
    }
    return <button className='task'>{list.title}</button>
}
export default Task;