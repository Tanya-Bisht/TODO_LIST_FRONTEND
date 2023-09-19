
import './App.css'
import { useState } from 'react';
import {axios} from 'axios';

function App() {

  const [title,setTitle]=useState('')
  const [description,setDescription]=useState('')


  const addTitle=(e)=>{
    setTitle(e.target.value)

  }

  const addDescription=(e)=>{
    setDescription(e.target.value)
  }

const addToDo=(e)=>{
  console.log(title)
  console.log(description)


}

  return (
   <div className='outerbox'><h1>Todo List</h1>
   <div className='innerbox'>
     <input type="text" onChange={addTitle} placeholder="Title"  />
     <input type="text" onChange={addDescription} placeholder="Description"  />
     <button onClick={addToDo}>Add Todo</button>
   </div>
   </div>
  );
}

export default App;
