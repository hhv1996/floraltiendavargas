import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router'
import SpinnerAnimation from '../../SpinnerAnimation/SpinnerAnimation'
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../../service/firebase/firebase';

const ItemListContainer = ()=>{
    const [product,setProduct] = useState ([])
    const { productID } = useParams()
    useEffect(() => {
        getDoc(doc(db,'products',productID)).then((querySnapshot)=>{
            const auxProduct = {id:querySnapshot.id,...querySnapshot.data()}
            setProduct(auxProduct)
            console.log(auxProduct)
        })
    },[productID]);
    return(
        <div > 
            {product.length!==0?<ItemDetail product={product}/>:<SpinnerAnimation/>}
        </div>
        
    )
} 
export default ItemListContainer