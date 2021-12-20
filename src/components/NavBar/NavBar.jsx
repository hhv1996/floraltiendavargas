import './NavBar.css'
import Logo from './logo.png'
import Shopwidget from './CartWidget/CartWidget'
import { getAllCategory } from '../../backEnd'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ProductList = (categorys=[])=>{
    return(
		<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
			{            
			categorys.map(c => <li><Link className="dropdown-item" to={"/category/"+c.description}>{c.description}</Link></li> )
			}
		</ul>
    )
} 

const NavBar = ()=>{
	const [listCategory,setListCategory] = useState ([])
    useEffect(() => {
        const catogrys = getAllCategory()
        catogrys.then(response => {setListCategory(response)})
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
								{/* <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
									<li><a className="dropdown-item" href="/#">REMERAS</a></li>
									<li><a className="dropdown-item" href="/#">ZAPATOS</a></li>
									<li><a className="dropdown-item" href="/#">BLUZAS</a></li>
								</ul> */}
								{listCategory!==[]?ProductList(listCategory): <div></div> }
							</li>
							<Link className="nav-link " to="/#">FLOR DE DATA</Link>
							<Link className="nav-link " to="/#">COMO COMPRAR</Link>
							<Link className="nav-link " to="/#">CONTACTO</Link>
							<Shopwidget numCompra={5}/>
						</div>
					</div>
				</div>
		</nav>
    )
} 
export default NavBar