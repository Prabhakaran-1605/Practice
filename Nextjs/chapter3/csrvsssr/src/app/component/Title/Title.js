
"use client"

import {useState} from "react"
const Title = () => {

    const [name,setName] = useState("")

    const onSubmit = () => {
        alert(`Hello , button clicked ${name}`)
        setName("")

    }

    return (
        <div>
        <h1> Title</h1>
        <input placeholder="username" value={name} type="text" onChange={(e)=>{setName(e.target.value)}}/> 
        <button onClick={onSubmit}>Click</button>
        </div>  
    )
}

export default Title;