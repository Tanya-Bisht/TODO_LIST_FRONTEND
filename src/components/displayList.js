import React, { useState } from "react";
import axios from "axios";
function DisplayList({todos,deleteApi}) {


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
                            <p>{todo.Description}</p>
                        </div>
                        <div>
                            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
                        </div>


                    </div>
                ))}
            </div>

        </>

    )
}

export { DisplayList};                     {/* if we want to export more than one function or variable */}