import { useEffect, useState } from 'react';
import Itemlist from '../ItemList/ItemList'
import './ItemListContainer.css'
import { collection, getDocs} from 'firebase/firestore';
import { db } from '../../../service/firebase/firebase';

const ItemListContainer = ()=>{
    const [listProducts,setListProducts] = useState ([])
    useEffect(() => {
        getDocs(collection(db,'products')).then((querySnapshot)=>{
            const auxProducts = querySnapshot.docs.map((doc)=>{
                return{id:doc.id,...doc.data()}
            })
            setListProducts (auxProducts)
        }).catch((error)=>{
            console.log("Error en la promise products:"+ error)
        })
    },[]);
    return(
        <div className="itemListContainer"> 
            <Itemlist products={listProducts}/>
        </div>
    )
} 
export default ItemListContainer