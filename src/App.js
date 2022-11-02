import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer text='Catalogo de Productos' />
    </div>
  )
};

export default App;