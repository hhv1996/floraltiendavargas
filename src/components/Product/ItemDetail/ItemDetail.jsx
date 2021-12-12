import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ImgCarousel = (imgs=[])=>{
    let aux = -1
    let classname = "carousel-item"
    console.log(imgs)
    return(
        <div className="carousel-inner">
        {   
            imgs.map(i =>         
                {
                    aux++
                    return (
                        <div className={aux===0?classname+" active":classname}>
                            <img src={i.imgCarousel} className="d-block w-100 img-fit" alt="..."/>
                        </div>)
                }
            )
        }
        </div>
    )
} 
const IndicatorCarousel = (imgs=[])=>{
    let aux = -1
    console.log(imgs)
    return(
        <div className="carousel-indicators">
        {   
            imgs.map(i =>         
                {
                    aux++
                    return (aux===0?
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={aux} className="active" aria-current="true" aria-label={"Slide "+ aux+1}></button>
                        :
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={aux} aria-label={"Slide "+ aux+1}></button>
                        )
                }
            )
        }
        </div>
    )
} 
const ItemDetail = ({product})=>{
    return(
        <div className="container itemDetailRow">
            <div id="carouselExampleIndicators" className="carousel slide mx-auto itemDetailcol1" data-bs-ride="carousel">
                {product!==[]?IndicatorCarousel(product.arrayImgCarousel): <div></div> }
                {product!==[]?ImgCarousel(product.arrayImgCarousel): <div></div> }
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="itemDetailcol2">
                <ItemCount stock={product.stock} initial={1} title={product.title} desc={product.description} price={product.price}/>
            </div>
        </div>
    )
} 
export default ItemDetail