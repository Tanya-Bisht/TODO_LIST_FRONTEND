import React from "react";

function DisplayList({todos}) {


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
                    </div>
                ))}
            </div>

        </>

    )
}

export { DisplayList};                     {/* if we want to export more than one function or variable */}