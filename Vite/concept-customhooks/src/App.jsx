
import './App.css'
import useLocalStorage from './hooks/useLocalStorage'

function App() 
{
  const [name,setName] = useLocalStorage('userName','')
   const [id,setId] = useLocalStorage('id','')
  return (
    <>
    <input type="number" value={id} onChange={(e)=> setId(e.target.value)}/>
    <h1>My Id: {id}</h1>
    <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
    <h1>name: {name}</h1>
    </>
  )
}

export default App
