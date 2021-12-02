import './Carousel.css'
const Carousel = ()=>{
    return(
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src="https://desiderata.vteximg.com.br/arquivos/ids/217584/SliderDsktp_30Off.jpg?v=637738142182730000" className="d-block carouselImgFit" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://desiderata.vteximg.com.br/arquivos/ids/216752/WEB_banner%20principal%20copy.jpg?v=637717447832330000" className="d-block carouselImgFit" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://desiderata.vteximg.com.br/arquivos/ids/217584/SliderDsktp_30Off.jpg?v=637738142182730000" className="d-block carouselImgFit" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    )
} 
export default Carousel