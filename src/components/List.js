import React from 'react'
import Todo from './Todo'

const List = ({ list, setList, setValue, textValue, edit, setEdit, editedItem, setEditItem}) => {

  return (
    <div className='list-container'>
      <h2>What's left...</h2>
      {list.length ? 
      <ul className='list'>
        {list.map((todo) => 
          <Todo
            todo={todo}
            list={list}
            setList={setList}
            textValue={textValue}
            edit={edit}
            setEdit={setEdit} 
            key={Math.random()}
            editedItem={editedItem}
            setEditItem={setEditItem}
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
