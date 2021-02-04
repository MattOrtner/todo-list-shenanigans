import React, {useState} from 'react'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import List from './components/List'



const initialState = []
  
const App = () => {
  const [list, setList] = useState(initialState)
  const [todo, setTodo] = useState({text: '', time: ''})
  const [editedItem, setEditItem] = useState({})

  // const fn = () => {

  // }
  return (
    <div className='App'>
      <Header />
      <Form
        list={list}
        setList={setList}
        todo={todo}
        setTodo={setTodo}
        editedItem={editedItem}
        setEditItem={setEditItem}
      />
      <List
        setList={setList}
        list={list}
        todo={todo}
        setTodo={setTodo}
        editedItem={editedItem}
        setEditItem={setEditItem}
      />
    </div>
  )
}

export default App

