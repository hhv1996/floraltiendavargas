import { useState , useEffect} from 'react';
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
      <Carousel/>
      <ProductCategoryContainer/>
      <ItemDetailContainer/>
      <ItemListcontainer/>
      <Footer/>
    </div>

  );
}

export default App;
