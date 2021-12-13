import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProductById } from '../../../backEnd'
import { useParams } from 'react-router'
import SpinnerAnimation from '../../SpinnerAnimation/SpinnerAnimation'

const ItemListContainer = ()=>{
    const [product,setProduct] = useState ([])
    const { productID } = useParams()
    useEffect(() => {
        const products = getProductById(productID)
        products.then(response => {
            setProduct(response)
        })
    },[productID]);
    return(
        <div > 
            {product.length!==0?<ItemDetail product={product}/>:<SpinnerAnimation/>}
        </div>
        
    )
} 
export default ItemListContainer