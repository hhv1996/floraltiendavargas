import { useEffect, useState } from 'react';
import Itemlist from '../ItemList/ItemList'
import { getAllProduct } from '../../../backEnd'

const ItemListContainer = ()=>{
    const [listProducts,setListProducts] = useState ([])
    useEffect(() => {
        const products = getAllProduct()
        products.then(response => {setListProducts(response)})
    },[]);
    return(
        <div > 
            <Itemlist props={listProducts}/>
        </div>
        
    )
} 
export default ItemListContainer