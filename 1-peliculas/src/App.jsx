import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import  {MyRoutes}  from './routers/routes'
function App() {
  const [count, setCount] = useState(0)

  return (<div>
      <header>
        <h1 className='title'>🎬Cuevana3</h1>
      </header>
    <MyRoutes/>
    </div>
    
  )
}

export default App
