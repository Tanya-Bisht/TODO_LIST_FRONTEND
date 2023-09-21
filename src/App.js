
import './App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [getData, setGetData] = useState([])
   {/* render used to make useEffect based on the value of render being changed . UseEffect is run first tym the page is rendered fetching all the data from database
   then while posting the data the value of rendered is reset to fetch the data that is just being posted*/}
  const [render, setRender] = useState(true)           
 
  
const getApiData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/todo")

      setGetData(res.data)

    }
    catch (err) {
      console.log("error while fetching the api data ", err)
    }
  }

  useEffect(() => {

    getApiData();
    console.log("useEffect called")
    console.log(getData)

  } , [render])

  const addTitle = (e) => {
    setTitle(e.target.value)

  }

  const addDescription = (e) => {
    setDescription(e.target.value)
  }
  const postApiData = async () => {
    try {
      await axios.post("http://localhost:5000/todo", { title, description })
      console.log(title)
      setRender(false)
      console.log("postapi")

    }
    catch (err) {
      console.log("error while fetching the api data ", err)
    }
  }

  const addToDo = (e) => {

    postApiData();
    console.log("Added Data")
    setTitle("")
    setDescription("")

    console.log("values of title nd desc", title, description)

  }


  return (
    <div className='outerbox'><h1>Todo List</h1>
      <div className='innerbox'>
        <input type="text" onChange={addTitle} placeholder="Title" value={title} />
        <input type="text" onChange={addDescription} placeholder="Description" value={description} />
        <button onClick={addToDo}>Add Todo</button>
      </div>

      <h2>Todo Items:</h2>

      <div className='listouter'>

        {getData.map((todo) => {
          return (
            <div className='lists' key={todo._id}>         {/* different div for todos based on different id's  */}
              <div className='listschild'>
                <strong>{todo.Title} </strong>
                <p>{todo.Description}</p>
              </div>
            </div>
          );


        })}
      </div>

    </div>
  )
}

export default App;
