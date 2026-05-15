import react from "react"
import { useParams } from "react-router-dom";

const User = () => {

    const {username} = useParams()


    return (
        <>
        User : {username}
        </>
    )

}

export default User;