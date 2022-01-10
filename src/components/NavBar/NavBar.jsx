import './NavBar.css'
import Logo from './logo.png'
import CartWidget from './CartWidget/CartWidget'
import CartContextProvider from '../../context/CartContext'
import CategoryList from './CategoryList'
import { collection, getDocs} from 'firebase/firestore' ;
import { db } from '../../service/firebase/firebase';
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const NavBar = ()=>{
	const [listCategory,setListCategory] = useState ([])
	const {cantItems} = useContext(CartContextProvider)

    useEffect(() => {
		getDocs(collection(db,'categorys')).then((querySnapshot)=>{
            const auxCategorys = querySnapshot.docs.map((doc)=>{
                return{id:doc.id,...doc.data()}
            })
			console.log(auxCategorys)
            setListCategory (auxCategorys)
        }).catch((error)=>{
            console.log("Error en la promise products:"+ error)
        })
    },[]);

    return(
		<nav className="navbar navbar-expand-lg navbar-light">
				<div className="container">
					<Link className="navbar-brand" to="/"><img src={Logo} alt="" width="150px" /></Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<Link className="nav-link " to="/#">NOSOTRAS</Link>
							<li className="nav-item dropdown">
								<Link className="nav-link dropdown-toggle" to="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									PRODUCTOS
								</Link>
								{listCategory!==[]?<CategoryList categorys={listCategory}/>: <div></div> }
							</li>
							<Link className="nav-link " to="/#">FLOR DE DATA</Link>
							<Link className="nav-link " to="/#">COMO COMPRAR</Link>
							<Link className="nav-link " to="/#">CONTACTO</Link>
							{cantItems!==0?<CartWidget numCompra={cantItems}/>: <div></div> }
						</div>
					</div>
				</div>
		</nav>
    )
} 
export default NavBar