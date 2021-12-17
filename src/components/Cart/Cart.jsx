import { useContext } from 'react'
import CartContextProvider from '../../context/CartContext'

const tableRow = (products=[])=>{
    return(
        <tbody>
        {   
            products.map(p =>         
                {
                    return (
                    <tr>
                        <th scope="row">{p.title}</th>
                        <td>{p.description}</td>
                        <td>{p.quantity}</td>
                        <td>{p.price}</td>
                    </tr>
                    )
                }
            )
        }
        </tbody>
    )
} 

const Cart = ()=>{
    const { productsList } = useContext(CartContextProvider)
    console.log(productsList)
    return(
        <div className="container"> 
            <table className="table">
                <thead className="thead-light">
                    <tr>
                    <th scope="col">Producto</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio Unitario</th>
                    </tr>
                </thead>
                {/* {products.length!==0? tableRow(products): <div></div> } */}
            </table>
        </div>
        
    )
} 
export default Cart