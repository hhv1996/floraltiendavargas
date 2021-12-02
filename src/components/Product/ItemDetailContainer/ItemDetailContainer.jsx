import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
const getItem=()=>{
    return new Promise((resolve, reject) =>{
     const object =
       {
         id:'1',
         title:'Remera de hilo',
         description:'Remera de hilo.Medidas: 66 cm de ancho. 53 cm de largo total.',
         price:'1.780,00',
         imgUrl:'https://d22fxaf9t8d39k.cloudfront.net/fc1e09c7c1953da381e375f3ad58c5218130f6a4a2e2561d2f96256aecdc2ae414158.jpeg',
         carrouselImg:[
            {
                img:'https://d22fxaf9t8d39k.cloudfront.net/fc1e09c7c1953da381e375f3ad58c5218130f6a4a2e2561d2f96256aecdc2ae414158.jpeg'
            },
            {
                img:'https://d22fxaf9t8d39k.cloudfront.net/ca8cc93cebde7f67f25c584c6c1b3789775e708495872b01071b037aced6004b14158.jpeg'
            },
            {
                img:'https://d22fxaf9t8d39k.cloudfront.net/396afcac2d8d890e94898c481b0e90dabb828e151bbe4493918e25b2011ce9f714158.jpeg'
            }
         ],
         stock:4
       }
        setTimeout(() => resolve(object), 2000 )
  
    })
  }
const ItemListContainer = ()=>{
    const [product,setProduct] = useState ([])
    useEffect(() => {
        const products = getItem()
        products.then(response => {
            setProduct(response)
            console.log(response)
        })
    },[]);
    return(
        <div > 
            <ItemDetail props={product}/>
        </div>
        
    )
} 
export default ItemListContainer