import { useState,useEffect,useLayoutEffect } from 'react'
import './App.css'

function App() {

  useEffect(()=> {
    console.log("useEffect")
  },[])

  useLayoutEffect(()=> {
  console.log("useLayoutEffect")
  },[])

  return (
    <>
    <h1>useLayoutEffect</h1>
    {
      Array(4000).fill("").map((item,index)=> (
        <li key={index}> { Math.pow(Math.random(),10)}</li>
      ))
    }
    </>
  )
}

export default App
