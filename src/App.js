import React, {useState} from 'react'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import List from './components/List'



const initialState = []
  
const App = () => {
  const [list, setList] = useState(initialState)
  const [textTimeValues, setTextTimeValues] = useState({})
  const [edit, setEdit] = useState(false)
  const [editedItem, setEditItem] = useState({})
  // const [taskTimeValue, setTimeValue] = useState(0)

  return (
    <div className='App'>
      <Header />
      <Form
        setList={setList}
        list={list}
        textTimeValues={textTimeValues}
        setTextTimeValues={setTextTimeValues}
        edit={edit}
        setEdit={setEdit}
        editedItem={editedItem}
        setEditItem={setEditItem}
        // taskTimeValue={taskTimeValue}
        // setTimeValue={setTimeValue}
      />
      <List
        setList={setList}
        list={list}
        textTimeValues={textTimeValues}
        setTextTimeValues={setTextTimeValues}
        edit={edit}
        setEdit={setEdit} 
        editedItem={editedItem}
        setEditItem={setEditItem}
      />
    </div>
  )
}

export default App

