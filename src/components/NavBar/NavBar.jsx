import './NavBar.css'
import Logo from './logo.png'

const NavBar = ()=>{
    return(
		<nav className="navbar navbar-expand-lg navbar-light ">
				<div className="container">
					<a className="navbar-brand" href="/#"><img src={Logo} alt="" width="110px" /></a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<a className="nav-link active" href="/#">INICIO</a>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    PRODUCTOS
                                </a>
                            </li>
                            <a className="nav-link " href="/#">NOSOTRAS</a>
                            <a className="nav-link " href="/#">FLOR DE DATA</a>
                            <a className="nav-link " href="/#">COMO COMPRAR</a>
                            <a className="nav-link " href="/#">CONTACTO</a>
						</div>
					</div>
				</div>
		</nav>
    )
} 
export default NavBar