import React, {useState} from 'react'


const Todo = ({ todo, setTodo, list, setList, editedItem, setEditItem}) => {
  const [isEditable, setEditable] = useState(false)

  const handleDelete = () => {
    const newList = list.filter((item) => item.id !== todo.id)
    setList(newList)
  }

  const handleEdit = () => {
    setEditable (true)
    setEditItem(todo)
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setTodo({ ...todo, [name]: value })
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    const filteredList = list.filter((el) => el.id !== editedItem.id)
    setList([{ text: todo.text, id: editedItem.id, time: todo.time }, ...filteredList])
    setEditItem('')
    // setEditable(false)
    setTodo({ text: '', time: '' })
  }

  return (
    <li className='task'>
      {isEditable ? 
        <>
          <form onSubmit={handleUpdate} >
            <input type="text" value={todo.text}  name="text" onChange={handleChange} />
            <input type="number" value={todo.time} name="time" onChange={handleChange} />
              <button className="btn" type="submit">UPDATE</button>
          </form>
        </>
        :
        <>
          <span className='todo-title'>{todo.text}</span>
          <span className='todo-title'>{todo.time} minutes</span>
          <div className="btn-container">
            <button className="btn" onClick={handleEdit}>edit</button>
            <button className="btn" onClick={handleDelete}>delete</button>
          </div>
        </>
      }
    </li>
  )
}

export default Todo
