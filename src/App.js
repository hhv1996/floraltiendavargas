import './App.css';
import Navbar from './components/NavBar/NavBar'
import ItemListcontainer from './components/Product/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/Product/ItemDetailContainer/ItemDetailContainer'
import Footer from './components/Footer/Footer'
import Carousel from './components/Carousel/CarouselContainer/CarouselContainer'
import ProductCategoryContainer from './components/ProductCategory/ProductCategoryContainer/ProductCategoryContainer'
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
          <Route  path='/category/:categoryId'>
            <ProductCategoryContainer/>
          </Route>
          <Route  path='/detail/:productID'>
            <ItemDetailContainer/>
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer/>
    </div>

  );
}

export default App;
