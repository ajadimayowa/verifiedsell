
import styles from './productCard.module.css'
// import laptopImg from '../../assets/images/laptop1.png';
import {Button, Image } from "react-bootstrap";
import { convertToThousand } from '../../constants';

const ProductCard : React.FC<any> = ({prodId,productTitle,productPrice,productImage}) => {
    
    return (
        <div className={`${styles.container}`} role='button'>
            <a style={{textDecoration:'none'}} className="rounded p-2 py-0 m-0 border border-0" href={`/product-view/${prodId}`}>
            <div className={`${styles.prodImgContainer} d-flex justify-content-center align-items-center`}>
                    <Image className={`${styles.image}`} src={productImage}/>
            </div>
            <p className="w-100 p-0 m-0">{productTitle}</p>
            <p className="w-100 fw-bold text-danger">{convertToThousand(productPrice)}</p>
          <Button>Buy now</Button>
          </a>  
        </div>
    )

}
export default ProductCard;