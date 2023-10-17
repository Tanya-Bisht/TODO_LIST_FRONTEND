import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";



function SignupPage(){
    const navigate=useNavigate()
    const [userData,setUserData] = useState({email:"",password:""})


   
   
const navigateToNext=async(e)=>{
    e.preventDefault()
    console.log(userData)
    const response= await axios.post("http://localhost:5000/user/signup",userData)
    console.log(response)
if(response.data.token){
    const token=response.data.token
    localStorage.setItem('token', token)
    navigate("/todo")
}
  else{ window.alert(response.data)}

}
const navigateToNext2=async(e)=>{
    e.preventDefault()

    const response=await axios.post("http://localhost:5000/user/login",userData)
    if(response.data.token){
        const token=response.data.token
        localStorage.setItem('token', token)
        navigate("/todo")
    }
   else{ window.alert(response.data) }
       

}

    return <>
    <form className="signup">
        SignupPage
        <input  
        type="text" 
        placeholder="email"
        onChange={(e)=>{
            setUserData({...userData,email:e.target.value})          
        }
        } 
        value={userData.email}></input>

        <input  type="text"  placeholder="password"
        onChange={(e)=>{
            setUserData({...userData,password:e.target.value})
        }}
        value={userData.password}></input>
       <button onClick={navigateToNext}>
        SignUp
       </button>
       <button onClick={navigateToNext2}>Login</button>
    </form>
    </>
}

export default SignupPage;
