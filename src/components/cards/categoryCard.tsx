import './catCard.css'
import { Image } from "react-bootstrap";
import React from 'react';

const CategoryCard : React.FC<any> = ({imageUrl, categoryTitle}) => {
    return (
        <div className="container align-items-center" style={{maxWidth:200}}>
            <div className="circle shadow shadow-sm d-flex justify-content-center align-items-center">
                    <Image className="image" src={imageUrl}/>
            </div>
            <p className="text-center fw-bold">{categoryTitle}</p>
        </div>
    )

}
export default CategoryCard;