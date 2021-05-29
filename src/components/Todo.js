import React, { useState } from "react";
import Timer from "./Timer";
import Draggable from "react-draggable";

const Todo = ({ text, time, deleteTodo, i, updateTodo }) => {
  const [isEditable, setEditable] = useState(false);
  const [editedTodo, setEditedTodo] = useState({});

  const handleEdit = () => {
    setEditable(true);
    setEditedTodo({ text, time });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEditedTodo({ ...editedTodo, [name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateTodo(i, editedTodo);
    setEditable(false);
    setEditedTodo({ text: "", time: "" });
  };

  return (
    <Draggable>
      <li className="task">
        {isEditable ? (
          <>
            <form onSubmit={handleUpdate}>
              <input
                type="text"
                value={editedTodo.text}
                name="text"
                onChange={handleChange}
                autoComplete="off"
              />
              <input
                type="number"
                value={editedTodo.time}
                name="time"
                onChange={handleChange}
                autoComplete="off"
              />
              <button className="btn" type="submit">
                UPDATE
              </button>
            </form>
          </>
        ) : (
          <>
            <div className="todo-title">{text}</div>
            <Timer time={time} />
            <div className="btn-container">
              <button className="btn" onClick={handleEdit}>
                edit
              </button>
              <button className="btn" onClick={() => deleteTodo(i)}>
                delete
              </button>
            </div>
          </>
        )}
      </li>
    </Draggable>
  );
};

export default Todo;
