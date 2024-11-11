
import styles from './productCard.module.css'
import laptopImg from '../../assets/images/laptop1.png';
import { Button, Image } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const ProductCard : React.FC<any> = ({prodId}) => {
    const navigate = useNavigate()
    const handleNavigateToProduct = ()=>{
        navigate({pathname:`product-view/${prodId}`})

    }
    return (
        <div className={`${styles.container}`} onClick={handleNavigateToProduct} role='button'>
            <div className={`${styles.prodImgContainer} d-flex justify-content-center align-items-center`}>
                    <Image className={`${styles.image}`} src={laptopImg}/>
            </div>
            <p className="w-100 p-0 m-0">Macbook Pro 2022 | 16"</p>
            <p className="w-100 fw-bold text-danger">$350.00</p>
            <Button className="rounded bg-success p-2 py-0 m-0 border border-0">
            Buy now
            </Button>
        </div>
    )

}
export default ProductCard;