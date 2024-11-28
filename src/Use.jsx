import React, { useEffect } from 'react'
import { MyName } from './App'
import { useContext } from 'react'
const use = () => {
    const name = useContext(MyName)
    useEffect(()=>{
        document.title ="samilla project"
    })
  return (
    <div>
        <u><i><h1>introduction to react hooks</h1></i></u>
        <h1 style={{color:'darkgreen'}}><u>UseContext sample</u></h1>
       <h1>Name :{name[0]}</h1>
       <h1>Class:{name[1]}</h1>
    </div>
  )
}

export default use