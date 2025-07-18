import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [sum, setSum] = useState(0)
  const [count, setCount] = useState(0)
  function Button (){
  if (sum%5==0&sum>5) {
  return(
        <button onClick={() => {setCount((count) => {count=count+1; console.log(count);}); setSum((sum) => sum+=1)}}>
          The count is {"V"}
        </button>
 )
  }else if (count%2==0)
  return(
        <button onClick={() => {setCount((count) => {count=count+3; console.log(count);}); setSum((sum) => sum+=1)}}>
          The count is {"O"}
        </button>
 )
   else return(
        <button onClick={() => {setCount((count) => {count=count+5; console.log(count);}); setSum((sum) => sum+=1)}}>
          The count is {"X"}
        </button>
 )
}
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
      <div>
      <Button/>  
      </div>
      {sum>10?(<div>
      <Button/>  
      </div>): " "}
      {sum>20?(<div>
      <Button/>  
      </div>): " "}
     <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
