import React, { useEffect, useState } from 'react'

const UseEfffect = () => {
   const [todoes,setTodoes] =useState([])
    const HandleFetch = () =>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((reponse)=>reponse.json())
        .then((data)=>setTodoes(data))
        .catch((error)=>console.log(error))
    }
    useEffect(()=>{
        HandleFetch()
    })

  return (
   <div>
    <h1 style={{color:'darkmagenta'}}><u>use Effect  Sample</u></h1>
    <ol>
    {
        todoes.map((users)=>(
            <li>{users.name}</li>
        ))
    }
    </ol>
   </div>
  )
}

export default UseEfffect