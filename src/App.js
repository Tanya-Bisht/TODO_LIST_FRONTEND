
import './App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import {DisplayList} from './components/displayList';        
import AddTodo from './components/addTodo';


function App() {

  
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

  
  const postApiData = async (data) => {
    try {
      await axios.post("http://localhost:5000/todo", data)
      console.log(data.title)
      setRender(false)
      console.log("postapi")

    }
    catch (err) {
      console.log("error while fetching the api data ", err)
    }
  }

  return (
    <div className='outerbox'><h1>Todo List</h1>
      <AddTodo postApi={postApiData}/>
       <DisplayList todos={getData}/>
    </div>
  )
}

export default App;
