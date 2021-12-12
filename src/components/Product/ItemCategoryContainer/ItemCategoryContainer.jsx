import { useEffect, useState } from 'react';
import Itemlist from '../ItemList/ItemList'
import { getProductByCategory } from '../../../backEnd'
import './ItemCategoryContainer.css'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const ItemCategotyContainer = ()=>{
    const [listProductsByCategory,setListProductsByCategory] = useState ([])
    const { categoryID } = useParams()
    useEffect(() => {
        const products = getProductByCategory(categoryID)
        products.then(response => {setListProductsByCategory(response)
        console.log(response)
        })
    },[categoryID]);
    return(
        <div className="itemListContainer"> 
            <Itemlist products={listProductsByCategory}/>
        </div>
        
    )
} 
export default ItemCategotyContainer