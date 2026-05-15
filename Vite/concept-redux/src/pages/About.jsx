import React from "react"
import { useState } from "react"
import {useDispatch} from "react-redux"
import { setFruit } from "../Slices/fruitSlice"


const About = () => {

    const dispatch = useDispatch()

    const [fruit,setFruitInfo] = useState("")

    const addUser = ()=> {
        dispatch(setFruit(fruit))
    }


    return (
        <>
        <h1>About</h1>
        <input type="text" onChange={(e)=> setFruitInfo(e.target.value) } value={fruit}/>
        <button onClick={addUser}>Add fruit</button>
        </>
    )

}

export default About;