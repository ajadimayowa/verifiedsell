import React from "react";
import './catCard.css'
import laptopImg from '../../assets/images/laptop1.png';
import { Image } from "react-bootstrap";

const CategoryCard = () => {
    return (
        <div className="container align-items-center" style={{maxWidth:200}}>
            <div className="circle d-flex justify-content-center align-items-center">
                    <Image className="image" src={laptopImg}/>
            </div>
            <p className="text-center">Electronics & Supplies</p>
        </div>
    )

}
export default CategoryCard;