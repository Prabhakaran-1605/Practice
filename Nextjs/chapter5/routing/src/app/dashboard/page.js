"use client"

import {useRouter} from "next/navigation"

const Dashboard = ()=> {

    const router = useRouter()

    return (
        <>
        <h1>Dashboard</h1>
        <button onClick = {()=> router.push("/dashboard/admin")}>Navigate to Dashboard Admin</button>
        </>
    )
}

export default Dashboard