import { useState } from 'react'
import './App.css'
import Profile from './component/Profile'
import Contact from './component/Contact'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Profile/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
