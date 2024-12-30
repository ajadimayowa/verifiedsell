
import styles from './infoCard.module.css';
import {Image } from "react-bootstrap";

const InfoCard : React.FC<any> = ({imgUrl}) => {
    return (
        <div className={`${styles.container}`}>

            <div className={`d-flex bg-danger p-1`}>
                <Image className={`${styles.image} m-0`} src={imgUrl} />
            </div>
        </div>
    )

}
export default InfoCard;