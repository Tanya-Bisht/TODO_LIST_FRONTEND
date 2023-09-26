import React, { useState } from "react";
import InputComponent from "./InputComponent";


function DisplayList({todos,deleteApi,editApi}) {

const [updateDescription,setUpdateDescription]=useState(false)
const[id,setId]=useState("")
const [des,setDes]=useState("")





    const deleteTodo=(ID)=>{
        deleteApi(ID)
       
    }

   

    return (
        <>
            <h2>Todo Items:</h2>
            <div className="listouter">
                {todos.map((todo) => (
                    <div className="lists" key={todo._id}>
                         
                        <div className="listschild">
                            <strong>{todo.Title}</strong>
                        
                            {updateDescription && (todo._id==id)?<InputComponent setdes={setDes} description={des} id={todo._id} editApi={editApi} setUpdateDescription={setUpdateDescription}/>: <p>{todo.Description}</p>}
                        </div>
                        <div>
                        
                            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
                            <button onClick={()=>{
                                 setId(todo._id)
                                 setDes(todo.Description)
                                setUpdateDescription(true)
                            }}>Edit</button>
                           
                        </div>
                    </div>
                ))}
            </div>           
        </>

    )
}

export { DisplayList};                     {/* if we want to export more than one function or variable */}