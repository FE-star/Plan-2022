import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="Hello-container">
      <p>hello count is: {count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
    </div>
  )
}

export default App
