import React from "react"
import { useSelector,useDispatch } from "react-redux"
import { deleteUser } from "../Slices/userSlice"

const Users = () => {

        const dispatch = useDispatch()

        const Users = useSelector((state)=> state.userInfo.users)
        console.log(Users,"checking user")

        const deleteUserInfo = (index) => {
            dispatch(deleteUser(index))
        }

    return (
        <>
        {Users?.map((user,index)=>{
            return (
                <div key={index}>
                    <h1>{user.name}</h1>
                    <h1>{user.age}</h1>
                    <h1>{user.email}</h1>
                    <h1>{user.contact}</h1>
                    <button onClick={()=> deleteUserInfo(index)}>Delete</button>
                </div>
            )
        })}
        </>
    )

}

export default Users;