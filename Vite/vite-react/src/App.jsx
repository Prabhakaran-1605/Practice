// import './App.css'
// import {useState} from "react"

// function App() {

//   const [color,setColor] = useState("red")

//   let changeColor = () => {
//       setColor("blue")
//   } 

//   return (
//     <>
//       <div>
//         <p>My favourite Color is {color}!</p>
//         <button onClick={changeColor}>Click</button>
//       </div>
//     </>
//   )
// }

// export default App


// Example 2

// import './App.css'
// import {useState} from "react"

// function App() {

//   const [car,setCar] = useState({
//     brand: "ferrari",
//     modal: "Roma",
//     color: "red",
//     year: 2023
//   })

//   //   let changeColor = () => {
//   //     setCar({color: "blue"})
//   // } 

//   // above is not a write way to change the value of color property , it will remove other property that where we need to use fat arrow function and pass the prev state 

//   let changeColor = () => {
//       setCar((prev)=> {
//         return {...prev, color: "blue"}
//       }) 
//   } 

//   return (
//     <>
//       <div>
//         <p>My {car.brand} </p>
//         <p>It is a new {car.color} {car.model} from {car.year}</p>
//         <button onClick={changeColor}>Click</button>
//       </div>
//     </>
//   )
// }

// export default App


import './App.css'
import {useState} from "react"

function App() {

  const [count,setCount] = useState(0)

  // let changeCount = () => {
  //     setCount (count+1)  //  0 +1
  //     setCount (count+1)  //  0 +1
  //     setCount (count+1)  //  0 +1
  //     setCount (count+1)  //  0 +1
  //     // if i give like above the output will be 1 only it won't be 4
  //     // to prevent that we need to pass the prev state in the fat arrow function
    
  //   } 

  let changeCount = () => {
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);

  }

  return (
    <>
      <div>
        <h1> count : {count}</h1>
        <button onClick={changeCount}>Increase</button>
      </div>
    </>
  )
}

export default App
