import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // useEffect (()=>{
  //   setTimeout(()=> {
  //     setCount(count => count+1)
  //   },2000)
  // })

  // setTimeout has to execute only once but here it executes continously because there is no dependenies mentioned then callback function will execute whenever there is a change in the state of the Component.  

  //   useEffect (()=>{
  //   setTimeout(()=> {
  //     setCount(count => count+1)
  //   },2000)
  // },[])

  // if i use the dependency array then the call back function in the useEffect will execute only once 


      useEffect (()=>{
    setTimeout(()=> {
      setCount(count => count+1)
    },2000)
  },[count])

  // whenever there is a change in a count state it will execute the callback function 


  return (
    <>
  <h1>I've rendered {count} times</h1>
    </>
  )
}

export default App
