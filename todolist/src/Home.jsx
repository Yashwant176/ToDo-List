import React, { useEffect, useState } from "react";
import Create from "./Create.jsx";
import axios from "axios";
import "./App.css";

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (id) => {
    axios
      .put("http://localhost:3001/update/" + id)
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/delete/" + id)
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="todo-wrapper">
      <h2 className="title">📝 ToDo List</h2>
      <Create />
      <div className="todo-container">
        {todos.length === 0 ? (
          <div className="no-record">No tasks yet</div>
        ) : (
          todos.map((todo) => (
            <div
              className="todo-item"
              key={todo._id}
              onClick={() => handleEdit(todo._id)}
            >
              <span
                className={`status-icon ${todo.done ? "checked" : ""}`}
              ></span>
              <span className={`task-text ${todo.done ? "line_through" : ""}`}>
                {todo.task}
              </span>
              <span
                className="delete-icon"
                onClick={() => handleDelete(todo._id)}
              >
                🗑️
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
