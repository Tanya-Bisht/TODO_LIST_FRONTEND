
import './App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import { DisplayList } from './components/DisplayList';    
import AddTodo from './components/AddTodo';



function App() {
const navigate=useNavigate()
  
  const [getData, setGetData] = useState([])
   {/* render used to make useEffect based on the value of render being changed . UseEffect is run first tym the page is rendered fetching all the data from database
   then while posting the data the value of rendered is reset to fetch the data that is just being posted*/}
  const [render, setRender] = useState(true)           
 
  
const getApiData = async () => {
   
      const token=localStorage.getItem("token")
      console.log(token)
      const config = {
        headers: {
          Authorization: ` ${token}` // Include the token in the Authorization header
        }
      };
      
      console.log("configg",config)
      try {
      const res = await axios.get("http://localhost:5000/todo",config)
     if(res.data.length===0){
      setGetData(res.data)
     }
     else{

      setGetData(res.data[0].todos)
   
      console.log("getttt  ",res.data[0].todos)
     }
      
    }
    catch (err) {
     
      console.log("error while fetching the api data ", err)
      navigate('/')
    }
  }

  useEffect(() => {

    getApiData();
    console.log("useEffect called")
    console.log("get data",getData)

  } , [render])

  
  const postApiData = async (data) => {
    try {
      const token=localStorage.getItem("token")
      console.log("POST token",token)
      const config = {
        headers: {
          Authorization: ` ${token}` // Include the token in the Authorization header
        }
      };
      await axios.post("http://localhost:5000/todo", data,config)
      console.log("data title",data.title)
      setRender(!render)
      console.log("postapi")
    }
    catch (err) {
      console.log("error while posting the api data ", err)
    }
  }


  const deleteApi=async (id) => {
    try {
      const config = {
        headers: {
          Authorization: ` ${localStorage.getItem("token")}` // Include the token in the Authorization header
        }
      };
      await axios.delete(`http://localhost:5000/todo/${id}`,config)
      setRender(!render)
      console.log("deleteApi")
    }
    catch (err) {
      console.log("error while deleting data ", err)
    }
  }
  const editApi=async (data) => {
    const config = {
      headers: {
        Authorization: ` ${localStorage.getItem("token")}` // Include the token in the Authorization header
      }
    };
    try {
      console.log("dataId ",data.id)
      await axios.patch(`http://localhost:5000/todo/${data.id}`,data,config)
      setRender(!render)
      console.log("editApi")
    }
    catch (err) {
      console.log("error while editing data ", err)
    }
  }

  return (


    <div className='outerbox'><h1>Todo List</h1>
      <AddTodo postApi={postApiData}/>
       <DisplayList todos={getData} deleteApi={deleteApi} editApi={editApi}/>
       
       
    </div>
  )
}

export default App;
