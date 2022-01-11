import { useEffect, useState } from 'react';
import Itemlist from '../ItemList/ItemList'
import './ItemCategoryContainer.css'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { getProducts } from '../../../service/firebase/firebase'    

const ItemCategotyContainer = ()=>{
    const [listProductsByCategory,setListProductsByCategory] = useState ([])
    const { categoryID } = useParams()
    useEffect(() => {
        getProducts('category', '==', categoryID).then(products => {
            setListProductsByCategory(products)
        }).catch(error => {
            console.log(error)
        })
    },[categoryID]);
    return(
        <div className="itemListContainer"> 
            <Itemlist products={listProductsByCategory}/>
        </div>
        
    )
} 
export default ItemCategotyContainer