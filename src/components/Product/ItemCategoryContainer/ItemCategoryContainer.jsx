import { useEffect, useState } from 'react';
import Itemlist from '../ItemList/ItemList'
import './ItemCategoryContainer.css'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { collection, getDocs, query,  where } from 'firebase/firestore';
import { db } from '../../../service/firebase/firebase';

const ItemCategotyContainer = ()=>{
    const [listProductsByCategory,setListProductsByCategory] = useState ([])
    const { categoryID } = useParams()
    useEffect(() => {
        getDocs(query(collection(db,'products'),where('category','==',categoryID))).then((querySnapshot)=>{
            const auxProducts = querySnapshot.docs.map((doc)=>{
                return{id:doc.id,...doc.data()}
            })
            setListProductsByCategory (auxProducts)
        }).catch((error)=>{
            console.log("Error en la promise products:"+ error)
        })
    },[categoryID]);
    return(
        <div className="itemListContainer"> 
            <Itemlist products={listProductsByCategory}/>
        </div>
        
    )
} 
export default ItemCategotyContainer