   import {redirect} from "next/navigation" 
    
    async function temp () {
        return new Promise ((res,rej)=> {
            setTimeout (()=> {
                return res({role:1})
            },4000)
        })
    }

const Settings = async () => {

    const response = await temp()
    if (response.role !== 2) {
        redirect ("/dashboard")
    }
    return (
        <>
        <h1>Settings</h1>
        </>
    )
}

export default Settings;