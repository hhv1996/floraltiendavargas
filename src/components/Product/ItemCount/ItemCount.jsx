import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from 'react-router-dom'
import './ItemCount.css'
import { useState,useEffect} from 'react';


const ItemCount = ({product,initial,addItem,setCantAdd})=>{
    let stock = product.stock
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
        stock===0?
        <div>
            <p>Producto sin stock</p>
            <Link className="btn btn-secondary CartButtonAddToBag" to={"/"}>Volver al inicio</Link>
        </div>
        :
        <div className={`itemCounter ${disabled}`}>
            <div className="itemCountAddRemoveContainer">
                <button className="itemCountButtonRemove" onClick={Remove}><RemoveIcon/></button>
                <h4 className="itemCountNumber" >{itemcount}</h4>
                <button className="itemCountButtonAdd" onClick={Add}><AddIcon/></button>               
            </div>
            <button className="btn btn-secondary itemCountButtonAddToBag" onClick={()=>{addItem(product,itemcount); setCantAdd()}}>Finalizar compra</button>            
        </div>
    )
} 
export default ItemCount