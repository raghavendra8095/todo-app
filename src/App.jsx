import { useState } from "react";


import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  // const todoItems = [
  //   {
  //     name: "Buu Milk",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Go to College",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Like this page",
  //     dueDate: "right now",
  //   },
  // ];
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`New Item Added:${itemName} Date:${itemDueDate}`);
    const newTodoItems = [...todoItems, { name: itemName, dueDate: itemDueDate },];
    setTodoItems(newTodoItems);
  };


  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
    </center>
  );
}

export default App;
