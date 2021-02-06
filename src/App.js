import React, {useState} from 'react'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import List from './components/List'



const initialState = []
  
const App = () => {
  const [list, setList] = useState(initialState)
  const addTodo = (todo) => {
    setList([...list, todo])
  }

  return (
    <div className='App'>
      <Header />
      <Form
        addTodo={addTodo}
      />
      <List
        list={list}
        setList={setList}
      />
    </div>
  )
}

export default App

