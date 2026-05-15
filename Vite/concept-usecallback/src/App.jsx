import { useState,useCallback } from 'react'
import './App.css'
import Header from './components/Headers'

function App() {
  const [count, setCount] = useState(0)

  // const newFnc = () => {

  // }

  // if will cause rerender in the child component, because whenever this component re-render it will create a new instance for function 

  // const newFnc = useCallback(()=> {}, [])

  // re-render won't happen in the child component  callback will cached the fuction and doesn't create new instance when the component re-renders


  const newFnc = useCallback(()=> {}, [count])


  // re-render will happen in the happen in the child compoent if there is change happens in the dependency value.

  return (
    <>
    <Header newFnc = {newFnc}/>
    <h1>Count: {count}</h1>
    <button onClick={()=>setCount((prev)=> prev +1 )}> Click here</button>
     
    </>
  )
}

export default App
