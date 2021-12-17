import './App.css';
import React from 'react';
import Navbar from './components/NavBar/NavBar'
import ItemListcontainer from './components/Product/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/Product/ItemDetailContainer/ItemDetailContainer'
import ItemCategoryContainer from './components/Product/ItemCategoryContainer/ItemCategoryContainer'
import {CartContextProvider} from './context/CartContext'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
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
            <Route  path='/cart'>
              <Cart/>
            </Route>
          </Switch>
        </BrowserRouter>
      </CartContextProvider>
    </div>

  );
}

export default App;
