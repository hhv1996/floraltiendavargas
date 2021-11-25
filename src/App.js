import { useState , useEffect} from 'react';
import './App.css';
import Navbar from './components/NavBar/NavBar'
import ItemListcontainer from './components/Product/ItemListContainer/ItemListContainer'


const getItems=()=>{
  return new Promise((resolve, reject) =>{
   const object = [
     {
       id:'1',
       title:'Remera de hilo',
       description:'Remera de hilo.</br>Medidas:</br>66 cm de ancho.</br>53 cm de largo total.',
       price:'$1.780,00',
       imgUrl:'https://d22fxaf9t8d39k.cloudfront.net/fc1e09c7c1953da381e375f3ad58c5218130f6a4a2e2561d2f96256aecdc2ae414158.jpeg',
       stock:4
     },
     {
      id:'2',
      title:'Reme de hilo azul',
      description:'Reme de hilo azul.</br>Medidas:</br>66 cm de ancho.</br>53 cm de largo total.',
      price:'$1.780,00',
      imgUrl:'https://d22fxaf9t8d39k.cloudfront.net/64af019ed9ae9cc3dc5e5a6061512811618c41efe2214f7fa2394afea9545da114158.jpeg',
      stock:7
     },
     {
      id:'3',
      title:'Ojotas CANCÚN',
      description:'Ojotas CANCÚN.<br>ojotas de goma.<br>SOLO POR PEDIDO.<br>Reserva las tuyas a través de nuestras redes sociales.<br>Ingresa stock todas las semanas!',
      price:'$2.750,00',
      imgUrl:'https://d22fxaf9t8d39k.cloudfront.net/338696f06e0fc7548d63d5e0421d6f51de2693b84a6ceb0e4ef5d88b260669a114158.jpeg',
      stock:2
     },
     {
      id:'4',
      title:'Vestido hilo corto',
      description:'Vestido de hilo elastizado con botones carey, tiras para atar y regular escote y caída.<br><br>colores: negro, gris y beige.<br><br>talle único amplio!!<br><br>Medidas:<br><br>76 cm de largo.<br><br>33 cm de ancho.<br><br>[Medidas tomadas sin tener la prenda puesta]',
      price:'$2.565,00',
      imgUrl:'https://d22fxaf9t8d39k.cloudfront.net/a68f1b74d0942846817357d271cbc6354a81d048be178eed2e5db8b011e4474714158.jpeg',
      stock:2
     },
     {
      id:'5',
      title:'Camisa erika rosa',
      description:'Camisa oversized manga larga con bolsillo delantero.<br><br>Color: rosa.<br><br>Tela: Poplin rayado<br><br><br><br>Medidas:<br><br>Largo mangas: 55 cm<br><br>Largo: 74 cm<br><br>Ancho: 65 cm<br><br><br><br>Las medidas son tomadas con la prenda apoyada, no en contornos.',
      price:'$2.800,00',
      imgUrl:'https://d22fxaf9t8d39k.cloudfront.net/6c75e69078259d188dc0761d1fb9120f742bf0e6e1fabf27d00c261af004820514158.jpeg',
      stock:1
     }
   ]
      setTimeout(() => resolve(object), 2000 )

  })
}

function App() {
  const [listProducts,setListProducts] = useState ([])
  useEffect(() => {
      const products = getItems()
      products.then(response => {setListProducts(response)})
  },[]);


  return (
    <div className="App">
      <Navbar/>
      <ItemListcontainer props={listProducts}/>
    </div>

  );
}

export default App;
