import { useRef } from 'react'
import './App.css'

function App() {

  const inputElement = useRef()

  const btnClicked = () => {
    console.log(inputElement.current)
    inputElement.current.style.background = "red"
  }
  return (
    <>
    <input type="text" ref={inputElement}/>
    <button onClick={btnClicked}>Click here </button>    </>
  )
}

export default App
