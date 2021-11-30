import './Item.css'
import VisibilityIcon from '@mui/icons-material/Visibility';

const Item = ({title,description,price,imgUrl,stock})=>{
    return(
        <div>
            <div className="card">
                <img className="card-img-top" src={imgUrl} alt={title}/>
                <div className="card-body">
                    <p className="card-text">{title}</p>
                    <p className="card-text">{price}</p>
                </div>
                <div className="hoverDiv">
                    <VisibilityIcon fontSize="large"/>
                </div>
            </div>
        </div>
    )


} 
export default Item