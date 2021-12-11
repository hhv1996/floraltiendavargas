import './Item.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom'

const Item = ({product})=>{
    return(
        <div>
            <div class="card itemCard">
                <img class="card-img-top itemCardTop" src={product.imgUrl} alt={product.title}/>
                <div class="card-body itemCardBody">
                    <p class="card-text itemCardText">{product.title}</p>
                    <p class="card-text itemCardText" >{product.price}</p>
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