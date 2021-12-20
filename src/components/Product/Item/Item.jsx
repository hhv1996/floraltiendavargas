import './Item.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom'

const Item = ({product})=>{
    return(
        <div>
            <div className="card itemCard">
                <img className="card-img-top itemCardTop" src={product.imgUrl} alt={product.title}/>
                <div className="card-body itemCardBody">
                    <p className="card-text itemCardText">{product.title}</p>
                    <p className="card-text itemCardText" >{product.price}</p>
                </div>
                <div className="hoverDiv">
                    <Link className='ItemLink' to={`/detail/${product.id}`}>
                        <VisibilityIcon fontSize="large"/>
                    </Link>
                </div>
            </div>
        </div>
    )


} 
export default Item