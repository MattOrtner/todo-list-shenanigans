import React, { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Form from "./components/Form";
import List from "./components/List";
import Landing from "./components/Landing";

const initialState = [];

const App = () => {
  const [list, setList] = useState(initialState);
  const addTodo = (todo) => {
    setList([...list, todo]);
  };

  return (
    <div className="App">
      <Title />
      <div className="middle-container">
        <div className="form-container">
          <Form addTodo={addTodo} />
          <List list={list} setList={setList} />
        </div>
        <div className="landing-container">
          <Landing title={"Today"} />
          <Landing title={"Tomorrow"} />
          <Landing title={"Next Day"} />
        </div>
      </div>
    </div>
  );
};

export default App;
