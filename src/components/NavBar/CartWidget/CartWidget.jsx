import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const CartWidget = ({numCompra})=>{
    return(
        <div className="WidgetShop"> 
            <AddShoppingCartIcon/>
            {numCompra}
        </div>
        
    )
} 
export default CartWidget