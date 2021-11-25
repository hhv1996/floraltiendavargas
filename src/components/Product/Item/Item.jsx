import './Item.css'
import VisibilityIcon from '@mui/icons-material/Visibility';

const Item = ({key,title,description,price,imgUrl,stock})=>{
    return(
        <div>
            <div class="card">
                <img class="card-img-top" src={imgUrl} alt={title}/>
                <div class="card-body">
                    <p class="card-text">{title}</p>
                    <p class="card-text">{price}</p>
                </div>
                <div className="hoverDiv">
                    <VisibilityIcon fontSize="large"/>
                </div>
            </div>
        </div>
    )


} 
export default Item