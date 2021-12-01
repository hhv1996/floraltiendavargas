import './Item.css'
import VisibilityIcon from '@mui/icons-material/Visibility';

const Item = ({key,title,description,price,imgUrl,stock})=>{
    return(
        <div>
            <div class="card itemCard">
                <img class="card-img-top itemCardTop" src={imgUrl} alt={title}/>
                <div class="card-body itemCardBody">
                    <p class="card-text itemCardText">{title}</p>
                    <p class="card-text itemCardText" >{price}</p>
                </div>
                <div className="hoverDiv">
                    <VisibilityIcon fontSize="large"/>
                </div>
            </div>
        </div>
    )


} 
export default Item