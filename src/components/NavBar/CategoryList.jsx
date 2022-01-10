import React from 'react'
import { Link } from 'react-router-dom'

const CategoryList = ({categorys=[]}) => {
    return(
		<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
			{            
			categorys.map(c => <li><Link key = {c.description} className="dropdown-item" to={"/category/"+c.description}>{c.description}</Link></li> )
			}
		</ul>
    )
}

export default CategoryList
