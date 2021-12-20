import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Edit from '@mui/icons-material/Edit';
import './CartItemCount.css'

import { useState,useEffect} from 'react';


const CartItemCount = ({productId,stock,initial,modify})=>{
    const [itemcount,setItemcount] = useState(initial)
    const [isModify,setIsModify] = useState(false)
    const [disabled,setDisabled] = useState("active")
    
    useEffect(() => {
        if (initial>stock) {
            setDisabled("disabled");
        }
      },[initial,stock]);
    const Remove = ()=>{
        if (itemcount>1) {
            setItemcount(itemcount-1)
        }
    }
    const Add = ()=>{
        if (stock>itemcount) {
            setItemcount(itemcount+1)
        }
    }
    const modifyItem = (countItem)=>{
        setIsModify(false)
        modify(countItem,itemcount)
    }
    return(

        isModify?
        <div className={`CartCounter ${disabled}`}>
            <br/><br/>
            <div className="CartAddRemoveContainer">
                <button className="CartButtonRemove" onClick={Remove}><RemoveIcon/></button>
                <h6 className="CartNumber" >{itemcount}</h6>
                <button className="CartButtonAdd" onClick={Add}><AddIcon/></button>               
            </div>
            <button className="btn btn-secondary CartButtonAddToBag" onClick={()=>{modifyItem(productId,itemcount)}}>Confirmar</button>            
        </div>
        :
        <button className='CartButtonRemove' onClick={()=>{setIsModify(true)}}><Edit/></button>
        

    )
} 
export default CartItemCount