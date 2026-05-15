import {createContext} from "react"

export const AppContext = createContext();

const ContextProvider = (props) => {
    const phonenumber = "239284u109342"
    const name = "prabhakar"

    // if we need to pass more data then we need to pass it like a object 

    return (
        <AppContext.Provider value = {{phonenumber,name}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider;