import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateProblem from './pages/CreateProblem'

function App() {
  const [count, setCount] = useState(0)

  return (
    
     <div>

        <CreateProblem/>
     </div>

    
  )
}

export default App
