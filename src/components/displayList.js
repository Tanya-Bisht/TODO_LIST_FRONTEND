import React, { useState } from "react";


function DisplayList({todos,deleteApi,editApi}) {

const [updateDescription,setUpdateDescription]=useState(false)
const[id,setId]=useState("")
const [description,setDescription]=useState("")


    const deleteTodo=(ID)=>{
        deleteApi(ID) 
    }

    const changeDescription=(e)=>{   
     setDescription(e.target.value)
    }

    const submit=(e)=>{ 
       e.preventDefault()
       editApi({id,description})
       setUpdateDescription(false)
    }


    return (
        <>
            <h2>Todo Items:</h2>
            <div className="listouter">
                {todos.map((todo) => (
                    <div className="lists" key={todo._id}>
                         
                        <div className="listschild">
                            <strong>{todo.Title}</strong>
                            
                        {updateDescription && (todo._id===id)?<form onSubmit={submit}><input onChange={changeDescription} type='text' value={description}></input></form>:<p>{todo.Description}</p>}
                     
                        </div>
                        <div>    
                            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
                            {!updateDescription?
                            <button onClick={()=>{
                               console.log("edit button clicked")
                            
                               setUpdateDescription(true)
                               setId(todo._id)
                               setDescription(todo.Description)


                            }}>Edit</button>:
                            
                                <button onClick={submit}>Save</button>                           
                        }
                           
                        </div>
                    </div>
                ))}
            </div>           
        </>

    )
}

export { DisplayList};                     {/* if we want to export more than one function or variable */}