import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './ItemCount.css'
import { useState,useEffect} from 'react';


const ItemCount = ({stock,initial,onAdd})=>{
    const [itemcount,setItemcount] = useState(initial)
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

    return(
        <div className={`itemCounter ${disabled}`}>
            <br/><br/>
            <div className="itemCountAddRemoveContainer">
                <button className="itemCountButtonRemove" onClick={Remove}><RemoveIcon/></button>
                <h4 className="itemCountNumber" >{itemcount}</h4>
                <button className="itemCountButtonAdd" onClick={Add}><AddIcon/></button>               
            </div>
            <button className="btn btn-secondary itemCountButtonAddToBag" onClick={()=>onAdd(itemcount)}>Finalizar compra</button>            
        </div>
    )
} 
export default ItemCount