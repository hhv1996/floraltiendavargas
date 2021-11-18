import './App.css';
import Navbar from './components/NavBar/NavBar'
import ItemListcontainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListcontainer input={"Hola mundo"}/>
    </div>

  );
}

export default App;
