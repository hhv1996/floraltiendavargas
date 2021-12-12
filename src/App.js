import './App.css';
import Navbar from './components/NavBar/NavBar'
import ItemListcontainer from './components/Product/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/Product/ItemDetailContainer/ItemDetailContainer'
import ItemCategoryContainer from './components/Product/ItemCategoryContainer/ItemCategoryContainer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <ItemListcontainer/>
          </Route>
          <Route  path='/category/:categoryID'>
            <ItemCategoryContainer/>
          </Route>
          <Route  path='/detail/:productID'>
            <ItemDetailContainer/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
