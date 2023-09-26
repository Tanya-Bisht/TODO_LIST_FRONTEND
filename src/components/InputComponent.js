import React from 'react'



function InputComponent({description,setdes,id,editApi,setUpdateDescription}) {

const updateAPI=()=>{
    editApi({id,description})
    setUpdateDescription(false)
}

  return (
    <div>
        <form onSubmit={(e)=>{
            e.preventDefault()
            console.log(description)
            updateAPI()
        }}>
        <input type="text" onChange={(e)=>{
        setdes(e.target.value)
        }} value={description}></input>
        </form>
    </div>
  )
}

export default InputComponent