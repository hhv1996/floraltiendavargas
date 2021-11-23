import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './CartWidget.css'

const CartWidget = ({numCompra})=>{
    return(
        <div className="WidgetShop"> 
            <AddShoppingCartIcon/>
            {numCompra}
        </div>
        
    )
} 
export default CartWidget