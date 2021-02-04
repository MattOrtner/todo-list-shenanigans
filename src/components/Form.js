import React from 'react'

const Form = ({ setList, list, todo, setTodo, edit, setEdit, editedItem, setEditItem }) => {

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    console.log(todo)

    setTodo({...todo, [name]: value })
  }

  const handleSubmit = (e) => {
    setList([...list, { text: todo.text, id: Math.random(), time: todo.time }])
    setTodo({text:'', time: ''})
    e.preventDefault()
  }

  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          value={todo.text}
          placeholder='Something'
          className="todo input"
          autoComplete='off'
          onChange={handleChange}
          autoFocus
        />
        <input
          type="number"
          name="time"
          value={todo.time}
          placeholder="Duration"
          autoComplete="off"
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default Form
