import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import './CartWidget.css'
 
const CartWidget = ({numCompra})=>{
    return(
        <div className='WidgetShop'>
            <Link to="/cart" className="WidgetShop"> 
                <AddShoppingCartIcon/>
                {numCompra}
            </Link>
        </div>
        
        
    )
} 
export default CartWidget