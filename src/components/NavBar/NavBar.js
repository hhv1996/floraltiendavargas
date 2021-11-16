import './NavBar.css'
import Logo from './logo.png'

const NavBar = ()=>{
    return(
		<nav class="navbar navbar-expand-lg navbar-light ">
				<div class="container">
					<a class="navbar-brand" href="#"><img src={Logo} alt="" width="110px" /></a>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
						<div class="navbar-nav">
							<a class="nav-link active" href="#">INICIO</a>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    PRODUCTOS
                                </a>
                            </li>
                            <a class="nav-link " href="#">NOSOTRAS</a>
                            <a class="nav-link " href="#">FLOR DE DATA</a>
                            <a class="nav-link " href="#">COMO COMPRAR</a>
                            <a class="nav-link " href="#">CONTACTO</a>
						</div>
					</div>
				</div>
		</nav>
    )
} 
export default NavBar