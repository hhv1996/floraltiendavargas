import React from 'react'

const IndicatorCarousel = ({imgs=[]}) => {
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

export default IndicatorCarousel
