import { useContext, useState } from 'react'
import CartContextProvider from '../../context/CartContext'
import CartItemCount from './CartItemCount/CartItemCount'
import Delete from '@mui/icons-material/Delete'
import SpinnerAnimation from '../SpinnerAnimation/SpinnerAnimation'
import './Cart.css'
import { Link } from 'react-router-dom'
import { collection, addDoc, doc, writeBatch, getDoc} from 'firebase/firestore';
import { db } from '../../service/firebase/firebase';



const Cart = ()=>{
    const [idCompra,setIdCompra] = useState("")
    const [buyInProces,setBuyInProces] = useState(false)
    const {productsList,removeItem,modify,clear,totalPrice} = useContext(CartContextProvider)

    const createOrder=()=>{
        setBuyInProces(true)
        const buy={
            buyer:{
                name: "Hugo",
                phone: "1535821227",
                mail: "hhv1996@gmail.com"
            },
            items: productsList,
            date: Date.now(),
            total: totalPrice
        }
        const batch = writeBatch(db)
        const outOfStock = []

        buy.items.forEach(p=>{
            getDoc(doc(db,'products',p.id)).then((documentSnapshot)=>{
                if(documentSnapshot.data().stock>=p.quantity){
                    batch.update(doc(db,'products',documentSnapshot.id),{
                        stock:documentSnapshot.data().stock-p.quantity
                    })
                }else{
                    outOfStock.push({id:documentSnapshot.id,...documentSnapshot.data()})
                }
            })
        });
        if (outOfStock.length===0) {
            addDoc(collection(db,'orders'),buy).then(({id})=>{
                batch.commit().then(()=>{
                    setIdCompra(id)
                    clear()
                })
            }).catch((error)=>{
                console.log("error en la creacion de la orden",error)
            })
        }
        setBuyInProces(false)
    }


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
            buyInProces?
                <SpinnerAnimation/>:
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
                    <table className="table cartTable">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Precio Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">${parseFloat(totalPrice,10)}</th>
                        </tr>
                        </tbody>
                    </table>
                    <button className='itemCountButtonAdd' onClick={() => {createOrder()}}>Finalizar Compra</button>
                </div>
            :
            <div className='cartContainerMsgCompras'>
                <h2>{idCompra!==""?"Compra con exito! el Id de su compra es: "+idCompra:"No tiene productos en su carrito"}</h2>
                <Link className="btn btn-secondary CartButtonAddToBag" to={"/"}>Ve de compras</Link>
            </div>
            

        
    )
} 
export default Cart