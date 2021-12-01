import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
const ItemDetail = ()=>{

    return(
        <div className="container">
            <div class="row align-items-center ">
                <div class="col-sm-7" >
                    <div id="carouselExampleIndicators" className="carousel slide mx-auto" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src="https://d22fxaf9t8d39k.cloudfront.net/fc1e09c7c1953da381e375f3ad58c5218130f6a4a2e2561d2f96256aecdc2ae414158.jpeg" className="d-block w-100 img-fit" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src="https://d22fxaf9t8d39k.cloudfront.net/ca8cc93cebde7f67f25c584c6c1b3789775e708495872b01071b037aced6004b14158.jpeg" className="d-block w-100 img-fit" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src="https://d22fxaf9t8d39k.cloudfront.net/396afcac2d8d890e94898c481b0e90dabb828e151bbe4493918e25b2011ce9f714158.jpeg" className="d-block w-100 img-fit" alt="..."/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div class="col-sm-4">
                    <ItemCount stock={2} initial={1} title={"Reme de hilo blanca"} desc={"asdasdasdasd"}/>
                </div>
            </div>
        </div>
    )
} 
export default ItemDetail