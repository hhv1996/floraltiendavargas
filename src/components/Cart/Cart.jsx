import { useContext } from 'react'
import CartContextProvider from '../../context/CartContext'
import CartItemCount from './CartItemCount/CartItemCount'
import Delete from '@mui/icons-material/Delete'
import './Cart.css'
import { Link } from 'react-router-dom'



const Cart = ()=>{
    const {productsList,removeItem,modify} = useContext(CartContextProvider)

    const tableRow = ()=>{
        return(
            <tbody>
            {   
                productsList.map(p =>         
                    {
                        return (
                        <tr>
                            <th scope="row"><img src={p.imgUrl} alt={p.title} className='cartImg'/></th>
                            <td>{p.title}</td>
                            <td>{p.quantity}</td>
                            <td>${(parseFloat(p.price,10)*parseInt(p.quantity))}</td>
                            <td> <button className='itemCountButtonAdd' onClick={() => {removeItem(p.id)}}><Delete/></button></td>                            
                            <td><CartItemCount productId={p.id} stock={p.stock} initial={1} modify={modify}/></td>
                        </tr>
                        )
                    }
                )
            }
            </tbody>
        )
    } 
    return(
        productsList.length!==0?
            <div className="cartContainer"> 
                <table className="table cartTable">
                    <thead className="thead-light">
                        <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio Total</th>
                        </tr>
                    </thead>
                    {productsList?.length!==0? tableRow(): <div></div> }
                </table>
            </div>
            :
            <div className='cartContainerMsgCompras'>
                <h2>No tiene productos en su carrito</h2>
                <Link className="btn btn-secondary CartButtonAddToBag" to={"/"}>Ve de compras</Link>
            </div>
            

        
    )
} 
export default Cart