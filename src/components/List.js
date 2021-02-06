import React from 'react'
import Todo from './Todo'

const List = ({ list, setList }) => {

  const deleteTodo = (i) => {
    const newList = list.filter((_, index) => index !== i)
    setList(newList)
  }
  
  const updateTodo = (i, editedTodo) => {
    const updatedList = list.map((todo, index) =>
      index === i ? editedTodo : todo
    )
    setList(updatedList)
  }
 
  return (
    <div className='list-container'>
      <h2>What's left...</h2>
      {list.length ? 
      <ul className='list'>
        {list.map((todo, i) => 
          <Todo
            i={i}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
            text={todo.text}
            time={todo.time}
            key={Math.random()}
          />
        )}
        </ul>
        :
        <div className="no-tasks">No tasks</div>
      }
    </div>
  )
}

export default List
