import react from "react"


function Header () {
console.log("Header rendered")
    return (
        <>
        <h2>Header</h2>
        </>
    )


}

export default react.memo(Header);