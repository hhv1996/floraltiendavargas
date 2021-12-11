import { useEffect, useState } from 'react';
import Itemlist from '../ItemList/ItemList'
import { getAllProduct } from '../../../backEnd'
import './ItemListContainer.css'

const ItemListContainer = ()=>{
    const [listProducts,setListProducts] = useState ([])
    useEffect(() => {
        const products = getAllProduct()
        products.then(response => {setListProducts(response)})
    },[]);
    return(
        <div className="itemListContainer"> 
            <Itemlist products={listProducts}/>
        </div>
        
    )
} 
export default ItemListContainer