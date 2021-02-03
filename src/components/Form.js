import React from 'react'

const Form = ({ setList, list, textTimeValues, setTextTimeValues, edit, setEdit, editedItem, setEditItem, taskTimeValue, setTimeValue }) => {

  const handleChange = (e) => {
    const target = e.target.name
    const value = target.type === 'text' ? target.text : target.time
    const name = target.name
    setTextTimeValues({...textTimeValues, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (edit === true) {
      const filteredList = list.filter((el) => el.id !== editedItem.id)
      setList([{ text: textTimeValues.text, id: editedItem.id, time: textTimeValues.time }, ...filteredList])
      setEditItem('')
      setEdit(false)
    } else {
      setList([...list, { text: textTimeValues, id: Math.random(), time: taskTimeValue }])

    }
    console.log(textTimeValues)
  }

  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          value={textTimeValues.text}
          placeholder='Something'
          className="todo input"
          autoComplete='off'
          onChange={handleChange}
          autoFocus
        />
        <input
          type="number"
          name="time"
          value={textTimeValues.time}
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
