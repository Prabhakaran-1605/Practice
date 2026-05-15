import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Users from "./pages/Users"
import User from './pages/User'
import Error from "./pages/Error"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar'

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/users" element={<Users/>}/>
      <Route path="/user/:username" element={<User/>} />
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    </BrowserRouter>

  )
}

export default App
