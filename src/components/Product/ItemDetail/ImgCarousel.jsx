import React from 'react'

const ImgCarousel = ({imgs=[]}) => {
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
                            <img src={imgs[aux]} className="d-block w-100 img-fit" alt="..."/>
                        </div>)
                }
            )
        }
        </div>
    )
}

export default ImgCarousel
