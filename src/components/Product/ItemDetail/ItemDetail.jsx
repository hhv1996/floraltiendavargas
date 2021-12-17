import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContextProvider from '../../../context/CartContext'


const ImgCarousel = (imgs=[])=>{
    let aux = -1
    let classname = "carousel-item"
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
    const [cantAdd,setCantAdd] = useState (0)
    const { addItem } = useContext(CartContextProvider)

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
                <h3 className="itemCounttitle">{product.title}</h3>
                <h2 className="itemCountprice">${product.price}</h2>
                <p className="itemCountdesc">{product.description}</p>
                {
                    cantAdd===0?
                    <ItemCount product={product} initial={1} addItem={addItem}/>
                    :
                    <Link className="btn btn-secondary itemCountButtonAddToBag" to="/cart">Ir al carrito</Link>
                }
            </div>
        </div>
    )
} 
export default ItemDetail