import React from "react";
import "./App.css";
import Input from "./components/input";
import TodoItem from "./components/TodoItem";

import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";

function App() {
  const todoList = useSelector(selectTodoList);
  return (
    <div className="app">
      <div className="app_container">
        <div className="app_todoContainer">
          {todoList.map((items) => (
            <TodoItem name={items.item} done={items.done} id={items.id} key={items.id} />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;

