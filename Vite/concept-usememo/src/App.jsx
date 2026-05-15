import { useState,useMemo } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState(0)
  const [counter,setCounter] = useState(0)

  function cubeNum (num) {
    console.log("Calculation done")
    return Math.pow(num, 3)

  }

  // const result = cubeNum (number)

  const result = useMemo(()=> {
    return cubeNum (number)
  },[number])

  return (
    <>
    <input type="number" value={number} onChange={e => setNumber(e.target.value)}/>
      <h1>The Cube Number is {result}</h1>
          <button onClick={()=> { setCounter((prev)=> prev + 1)}}>Counter++</button>
          <h2>counter: {counter}</h2>
    </>


  )
}

export default App
