import React from "react"
import { useSelector } from "react-redux";

const Contact = () => {

    const fruits = useSelector((state)=> state.fruitInfo.fruits ) 
    console.log(fruits,"checking fruits")
 
    return (
        <>
        <h1>Contact</h1>
        </>
    )

}

export default Contact;