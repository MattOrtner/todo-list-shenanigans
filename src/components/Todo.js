import React from 'react'


const Todo = ({ todo, list, setList, textValue, setValue, setEdit, editedItem, setEditItem, textTimeValues }) => {

  const handleDelete = () => {
    const newList = list.filter((item) => item.id !== todo.id)
    setList(newList)
  }


  const handleEdit = () => {
    setValue(todo.text)
    setEdit(true)
    setEditItem(todo)
  }

  
  return (
    <li className='task'>
      <span className='todo-title'>{todo.text}</span>
      <span className='todo-title'>{todo.time}</span>
      <div className="btn-container">
        <button className="btn" onClick={handleEdit}>edit</button>
        <button className="btn" onClick={handleDelete}>delete</button>
      </div>
    </li>
  )
}

export default Todo
