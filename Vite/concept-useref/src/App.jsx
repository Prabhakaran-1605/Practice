import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { useRef } from 'react'

function App() {
  const [value, setValue] = useState(0)

  const count = useRef(0)


  // useEffect(()=>{
  //   setCount(prev => prev+1)
  // })

  useEffect(()=>{
    count.current = count.current + 1
  })



  return (
    <>
    <button onClick = {()=> {
      setValue( prev => prev + 1 )
    }}> + </button>
    <h1>{value}</h1>
    <button onClick = {()=> {
      setValue( prev => prev - 1)
    }}> - </button>
    <h1>Rendered Count : {count.current}</h1>
    </>
  )
}

export default App
