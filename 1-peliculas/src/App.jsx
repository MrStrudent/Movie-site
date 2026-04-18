import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import  {MyRoutes}  from './routers/routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-wrapper">
      <header>
        <h1 className='title'>🎬Cuevana3</h1>
      </header>
      <main>
        <MyRoutes/>
      </main>
      <footer className="app-footer">
        <div className="footer-content">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Escudo_UdeG.svg" 
            alt="Escudo CUCEI - Universidad de Guadalajara" 
            className="footer-logo"
          />
          <div className="footer-text">
            <p><strong>Integrantes:</strong> Erick Zaid Medina Torres &amp; Carlos Andrei Saucedo Aguilar</p>
            <p><strong>Profesor:</strong> Zeus Emanuel Gutierrez Cobian</p>
            <p><strong>Materia:</strong> Desarrollo de Aplicaciones Web en la Nube y Móviles</p>
            <p><strong>Calendario Escolar:</strong> 2026A &nbsp;|&nbsp; <strong>Mes y Año:</strong> Abril 2026</p>
            <p><strong>Institución:</strong> CUCEI – Universidad de Guadalajara</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
