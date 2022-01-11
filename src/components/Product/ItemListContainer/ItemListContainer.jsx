import { useEffect, useState } from 'react';
import Itemlist from '../ItemList/ItemList'
import './ItemListContainer.css'
import { getProducts } from '../../../service/firebase/firebase'    

const ItemListContainer = ()=>{
    const [listProducts,setListProducts] = useState ([])
    useEffect(() => {
        getProducts('category', '==', undefined).then(products => {
            setListProducts(products)
        }).catch(error => {
            console.log(error)
        })
    },[]);
    return(
        <div className="itemListContainer"> 
            <Itemlist products={listProducts}/>
        </div>
    )
} 
export default ItemListContainer