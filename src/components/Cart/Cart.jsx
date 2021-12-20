import { useContext } from 'react'
import CartContextProvider from '../../context/CartContext'
import './Cart.css'

const tableRow = (products=[],removeItem)=>{
    return(
        <tbody>
        {   
            products.map(p =>         
                {
                    return (
                    <tr>
                        <th scope="row"><img src={p.imgUrl} alt={p.title} className='cartImg'/></th>
                        <td>{p.title}</td>
                        <td>{p.quantity}</td>
                        <td>{p.price}</td>
                        <td> <button onClick={() => removeItem(p.id)}>Remove {p.id}</button></td>
                    </tr>
                    )
                }
            )
        }
        </tbody>
    )
} 

const Cart = ()=>{
    const {productsList,removeItem} = useContext(CartContextProvider)
    return(
        <div className="cartContainer"> 
            <table className="table cartTable">
                <thead className="thead-light">
                    <tr>
                    <th scope="col">Producto</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio Unitario</th>
                    </tr>
                </thead>
                {productsList.length!==0? tableRow(productsList,removeItem): <div></div> }
            </table>
        </div>
        
    )
} 
export default Cart