import React from "react"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../Slices/userSlice";

const Home = () => {

    const dispatch = useDispatch();

    const [formInput, SetFormInput] = useState ({
        name: "",
        age: "",
        email: "",
        contact: ""
    })

    const handleChange = (event) => {
        const {name,value} = event.target

        SetFormInput((current)=>{
            return {
                ...current,
                [name] : value
            }
        })

    }

    console.log(formInput,"formInput")

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(setUser(formInput))
    }



    return (
        <>
        <form>
        <label>Name</label> 
        <br/>
        <input name="name" type="text" value={formInput.name} onChange={handleChange}/>
        <br/>   
        <label>Age</label> 
        <br/>
        <input name="age" type="number" value={formInput.age} onChange={handleChange}/>
        <br/> 
        <label>Email</label> 
        <br/>
        <input name ="email"type="text" value={formInput.email} onChange={handleChange}/>
        <br/> 
        <label>Contact</label> 
        <br/>
        <input name="contact" type="number" value={formInput.contact} onChange={handleChange}/>
        <br/> 
        <button onClick={handleSubmit}>Submit</button>
        </form>
        </>
    )

}

export default Home;