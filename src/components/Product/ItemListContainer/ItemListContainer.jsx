import { useEffect , useState } from 'react'
import Itemlist from '../ItemList/ItemList'


const ItemListContainer = ({props})=>{
    const [products,setProducts] = useState ([])

    useEffect(()=>{
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=?iphone')
        .then(response=>{
            return response.json()
        }).then(res=>{
            setProducts(res.results.slice(0,10))
        })
    },[])

    
    return(
        <div > 
            <Itemlist props={products}/>
        </div>
        
    )
} 
export default ItemListContainer