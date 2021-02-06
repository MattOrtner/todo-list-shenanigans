import React, {useState} from 'react'

const Form = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState({ text: '', time: '' })
  
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setNewTodo({...newTodo, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo({...newTodo, id: Math.random()})
    // setList([...list, { text: newTodo.text, id: Math.random(), time: newTodo.time }])
    setNewTodo({text:'', time: ''})
  }

  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          value={newTodo.text}
          placeholder='Something'
          className="todo input"
          autoComplete='off'
          onChange={handleChange}
          autoFocus
        />
        <input
          type="number"
          name="time"
          value={newTodo.time}
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
