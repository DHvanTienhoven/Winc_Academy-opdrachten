const ToDoItem = props =>{
    return (
    <li className = "list-item">
        <input type = 'checkbox'className = "checkbox" checked = {props.todo.completed}/> 
        <span>{props.todo.text}</span>
    </li>)
}

export default ToDoItem;