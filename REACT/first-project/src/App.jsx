import './App.css'
import FirstComponent from './components/FirstComponent'

function App(){

  return (
    <div>
      <h1>Holiwi</h1>
      <h1>FSJ 22</h1>
      { /* Llaves indican que va a ir codigo JS aca adentro */}
      {/* Llamar/invocar a nuestro componente*/}
        <FirstComponent />
    </div>
  )
}

export default App
