import {ItemListComponents} from './components/ItemListComponents'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <nav>
          <a>Inicio</a>
          <a>¿Quienes somos?</a>
          <a>Contacto</a>
          <a>Productos</a>

        </nav>
      </div>
      <h1>OLI'S HOUSE  -decoHogar-</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 11)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
