import react from "react"
import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const Footer = () => {

    const {phonenumber,name} = useContext(AppContext)

    console.log(phonenumber,"checking in Footer")

    return (
        <>
        <h1>Footer</h1>
        <h2>Phone: {phonenumber} </h2>
        <h2>Name: {name}</h2>
        </>
    )

}

export default Footer