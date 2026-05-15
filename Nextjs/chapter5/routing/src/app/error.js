"use client"

const Error = ({error, reset}) => {

    console.log("error:", error)

    return (
        <>
        <h1> Something Bad Occured</h1>
        <button onClick={()=> reset()}> Try Again</button>
        </>
    )

}
export default Error;