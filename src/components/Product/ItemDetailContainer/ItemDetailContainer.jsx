import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProductById } from '../../../backEnd'
import { useParams } from 'react-router'

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
            <ItemDetail product={product}/>
        </div>
        
    )
} 
export default ItemListContainer