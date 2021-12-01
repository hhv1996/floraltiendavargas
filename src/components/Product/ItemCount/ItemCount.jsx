import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './ItemCount.css'
import { useState,useEffect} from 'react';


const ItemCount = ({stock,initial,title,desc,price})=>{
    const [itemcount,setItemcount] = useState(initial)
    const [disabled,setDisabled] = useState("active")
    useEffect(() => {
        if (initial>stock) {
            setDisabled("disabled");
        }
      },[]);
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
    const msgBuy = ()=>{
        if (stock>=itemcount) {
            alert(`Compraste:${itemcount}SuperTrajes`);
        }else{
            alert("No hay Stock");
        }
    }
    return(
        <div className={`itemCounter ${disabled}`}>
            <h3 className="itemCounttitle">{title}</h3>
            <h2 className="itemCountprice">${price}</h2>
            <p className="itemCountdesc">{desc}</p>
            <div className="itemCountAddRemoveContainer">
                <br/><br/><br/>
                <button className="itemCountButtonRemove" onClick={Remove}><RemoveIcon/></button>
                <a className="itemCountNumber">{itemcount}</a>
                <button className="itemCountButtonAdd" onClick={Add}><AddIcon/></button>    
                <a className="btn btn-secondary itemCountButtonAddToBag" onClick={msgBuy}>Agregar al carrito</a>            
            </div>
        </div>
    )
} 
export default ItemCount