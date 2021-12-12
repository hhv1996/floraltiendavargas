import './NavBar.css'
import Logo from './logo.png'
import Shopwidget from './CartWidget/CartWidget'
import { getAllCategory } from '../../backEnd'
import { useEffect, useState } from 'react'

const ProductList = (categorys=[])=>{
    return(
		<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
			{            
			categorys.map(c => <li><a className="dropdown-item" href={"/category/"+c.description}>{c.description}</a></li> )
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
					<a className="navbar-brand" href="/"><img src={Logo} alt="" width="150px" /></a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<a className="nav-link " href="/#">NOSOTRAS</a>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									PRODUCTOS
								</a>
								{/* <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
									<li><a className="dropdown-item" href="/#">REMERAS</a></li>
									<li><a className="dropdown-item" href="/#">ZAPATOS</a></li>
									<li><a className="dropdown-item" href="/#">BLUZAS</a></li>
								</ul> */}
								{listCategory!==[]?ProductList(listCategory): <div></div> }
							</li>
							<a className="nav-link " href="/#">FLOR DE DATA</a>
							<a className="nav-link " href="/#">COMO COMPRAR</a>
							<a className="nav-link " href="/#">CONTACTO</a>
							<Shopwidget numCompra={5}/>
						</div>
					</div>
				</div>
		</nav>
    )
} 
export default NavBar