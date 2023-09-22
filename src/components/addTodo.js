import React from "react";
import { useState } from "react";


function AddTodo({postApi}){
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const addTitle = (e) => {
        setTitle(e.target.value)
    
      }
    
      const addDescription = (e) => {
        setDescription(e.target.value)
      }
      
  const addToDo = () => {

    if(title.trim()==="" || description.trim()===""){                             {/* trim used to remove whitspaces nd to check if the input field is not empty*/}
     alert("please fill the fields")

    }else{
    postApi({title,description});                                {/**call back function used to pass the value from child to parent component */}
    console.log("Added Data")
    setTitle("")
    setDescription("")

    console.log("values of title nd desc", title, description)

  }}

    return <>
    <div className='innerbox'>
        <input type="text" onChange={addTitle} placeholder="Title" value={title}  />
        <input type="text" onChange={addDescription} placeholder="Description" value={description}  />
        <button onClick={addToDo}>Add Todo</button>
    </div>

    </>

}


export default AddTodo;