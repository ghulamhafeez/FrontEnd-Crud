import React, { useState ,useEffect} from 'react'
import { List } from './List'
export const Form = () => {
    const [data , setData] =useState([])
    const [name , setName] =useState("")

    useEffect(() => {
        fetch("http://localhost:3000/message")
          .then((res) => res.json())
          .then((data) => console.log(data.message,"msg"));
      }, []);



const onAdd = ()=>{
    const newData = [...data ,name]
    setData(newData)
}
  return (
    <div>
        <label>Name</label>
        <input type="text" onChange={(e)=>setName(e.target.value)}></input>
        <button onClick={()=>onAdd()}>Add</button>
        <hr></hr>
        <List data={data}/>
    </div>
  )
}
