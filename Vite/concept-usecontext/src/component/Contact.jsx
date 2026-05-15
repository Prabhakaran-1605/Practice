import react from "react"
import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const Contact = () => {

    const {phonenumber} = useContext(AppContext)

    return (
        <>
        <h1>Contact</h1>
        <h2>Phone: {phonenumber} </h2>
        </>
    )

}

export default Contact