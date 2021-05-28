import React from "react";
import Todo from "./Todo";

const List = ({ list, setList }) => {
  const deleteTodo = (i) => {
    const newList = list.filter((_, index) => index !== i);
    setList(newList);
  };

  const updateTodo = (i, editedTodo) => {
    const updatedList = list.map((todo, index) =>
      index === i ? editedTodo : todo
    );
    setList(updatedList);
  };

  const totalTime = () => {
    if (list.length) {
      return list.reduce((a, b) => a + parseInt(b.time), 0);
    }
  };

  return (
    <div className="list-container">
      <h2>The ToDo Que!</h2>
      {list.length ? (
        <ul className="list">
          <h3 className="total-time">{totalTime()}</h3>
          {list.map((todo, i) => {
            return (
              <Todo
                i={i}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
                text={todo.text}
                time={todo.time}
                key={Math.random()}
              />
            );
          })}
        </ul>
      ) : (
        <div className="no-tasks">No tasks</div>
      )}
    </div>
  );
};

export default List;
