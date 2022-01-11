import React from 'react'

const ImgCarousel = ({imgs=[]}) => {
    let aux = -1
    let classname = "carousel-item"
    console.log(imgs)
    return(
        <div className="carousel-inner" key={Math.random().toString(36).substr(2, 9)}>
        {   
            imgs.map(i =>         
                {
                    aux++
                    return (
                        <div className={aux===0?classname+" active":classname} key={i}>
                            <img src={imgs[aux]} className="d-block w-100 img-fit" alt="..." key={i}/>
                        </div>)
                }
            )
        }
        </div>
    )
}

export default ImgCarousel
