
import './App.css';
// import React {Component} from "react";
import ToDoItem from './components/toDoItems.js'
import todoData from './components/toDoData.js'

const App =() => {

  
  const todoComponents = todoData.map(item => <ToDoItem key = {item.id} todo = {item} />)

  return (
    <div className="App">
      {todoComponents}
    </div>
  );
}

export default App;

// class App extends React.Component {
//   constructor() {
//       super()
//       this.state = {
//           todos: todosData
//       }
//   }
  
//   render() {
//       const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)
      
//       return (
//           <div className="todo-list">
//               {todoItems}
//           </div>
//       )    
//   }
// }