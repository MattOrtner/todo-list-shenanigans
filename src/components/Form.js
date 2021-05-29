import React, { useState } from "react";

const Form = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState({ text: "", time: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewTodo({ ...newTodo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ ...newTodo, id: Math.random() });
    setNewTodo({ text: "", time: "" });
  };

  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          value={newTodo.text}
          placeholder="Something"
          className="inputs"
          autoComplete="off"
          onChange={handleChange}
          autoFocus
        />
        <input
          type="number"
          name="time"
          value={newTodo.time}
          placeholder="Minutes"
          className="inputs"
          autoComplete="off"
          onChange={handleChange}
        />
        <button type="submit" className="input">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;

{
  /* <div className="radio-importance-group">
  <input
    type="radio"
    value="1"
    name="importance"
    id="importance"
    onChange={handleChange}
  />{" "}
  1
  <input
    type="radio"
    value="2"
    name="importance"
    id="importance"
    onChange={handleChange}
  />{" "}
  2
  <input
    type="radio"
    value="3"
    name="importance"
    id="importance"
    onChange={handleChange}
  />{" "}
  3
  <input
    type="radio"
    value="4"
    name="importance"
    id="importance"
    onChange={handleChange}
  />{" "}
  4
</div> */
}
