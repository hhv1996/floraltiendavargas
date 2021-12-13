import SpinnerAnimation from '../../SpinnerAnimation/SpinnerAnimation'
import Item from '../Item/Item'





const ItemList = ({ products = []})=>{

    return(
        <div className="card-group container justify-content-center"> 
            {products.length!==0?products.map(p => <Item product={p} />):<SpinnerAnimation/>}
        </div>
        
    )
} 
export default ItemList