import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './ItemCount.css'
import { useState,useEffect} from 'react';


const ItemCount = ({stock,initial,title,desc})=>{
    const [itemcount,setItemcount] = useState(initial)
    const [disabled,setDisabled] = useState("active")
    useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
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
            alert("Compraste:"+itemcount+" SuperTrajes");
        }else{
            alert("No hay Stock");
        }
    }
    return(
        <div className={"itemCounter"+" "+disabled}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <div>
                        <button className="itemCountButtonRemove" onClick={Remove}><RemoveIcon/></button>
                        <a className="itemCountNumber">{itemcount}</a>
                        <button className="itemCountButtonAdd" onClick={Add}><AddIcon/></button>    
                    </div>
                </div>
            </div>
            <a className="btn btn-secondary itemCountButtonAddToBag" onClick={msgBuy}>Agregar al carrito</a>            
        </div>
    )
} 
export default ItemCount