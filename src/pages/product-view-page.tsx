import { useEffect, useState } from "react";
import SignupModal from "../components/modals/signupmodal";
import TopBarUnAuth from "../components/bars/topbar";
import team from '../assets/images/ecommerce.png';
import './prodView.css'
import SideBarUnAuth from "../components/bars/sidebar";
import LoginModal from "../components/modals/loginmodal";
import { useNavigate, useParams } from "react-router-dom";
import ProductCard from "../components/cards/productCard";
import InfoCard from "../components/cards/infoCard";
import {Image } from "react-bootstrap";
import { products } from "../constants";
import PaymentInfoModal from "../components/modals/paymentInfomodal";


export interface IProduct {
    id: string,
    catId: string,
    title: string,
    prodDescription: string,
    prodImageUrl: string,
    price: string,
    section: string

}

export interface IPayment {
    title: string,
        method:string,
        email: string,
        tag: string
}

const paymentMenthods = [
    {
        title: 'Paypal',
        method:'paypal',
        icons: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/paypal.png',
        id: '0'
    },
    {
        title: 'Zelle',
        method:'zelle',
        icons: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/zelle.png',
        id: '0'
    },
    {
        title: 'Cashapp',
        method:'cashapp',
        icons: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/cashapp.png',
        id: '0'
    },
    {
        title: 'Venmo',
        method:'venmo',
        icons: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/venmo.png',
        id: '0'
    },
]
const ProductViewPage = () => {
    const navigate = useNavigate()
    const token: string = localStorage.getItem('userToken') || ''
    const [regModal, setRegModal] = useState(false);
    const [paymentModal, setPaymentModal] = useState(false);
    const [loginModal, setLoginModal] = useState(false);
    const [onSideNav, setOnSideNav] = useState(false);
    const { id } = useParams() || '';
    const [selectedProduct, setSelectedProduct] = useState<IProduct[]>([]);
    const [paymentDetails,setPaymentDetails] = useState<IPayment>();
    
    // const [services, setServices] = useState<IService[]>([]);
    // const [allServices, setAllServices] = useState<IService[]>([]);
    // const [currentServicesPage, setCurrentServicesPage] = useState(1);
    // const [allServicePageNumber, setAllServicePageNumber] = useState(1);
    // const [refData, setRefData] = useState(false);
    // const [transit, setTransit] = useState(false);

    const LoadingPage = () => {

        useEffect(() => {
            token && navigate('/dashboard', { replace: true, preventScrollReset: true })
        }, [token])

        return (
            <div>loading</div>
        )
    }

    const handleSelectedProd = () => {
        let filtered = products.filter((prod: IProduct) => prod.id === id);
        // console.log({filt:filtered, id:id})
        // toast.success(filtered[0].title)
        setSelectedProduct(filtered)

    }

    

    useEffect(() => {
        handleSelectedProd()
    }, [id])


    const handleShowPaymentInfo = (type: string) => {
        setPaymentModal(true);
        switch (type) {
            case '':
                // Handle the case where `type` is an empty string
                console.log("Type is empty");
                break;
    
            case 'paypal':
                setPaymentDetails({
                    title:'Paypal',
                    method:'paypal',
                    email:import.meta.env.VITE_APP_PAYPAL_EMAIL,
                    tag:import.meta.env.VITE_APP_PAYPAL_TAG,
                    
                })
                break;
    
            case 'zelle':
                // Handle the case where `type` is 'paypal'
                setPaymentDetails({
                    title:'Zelle',
                    method:'zelle',
                    email:import.meta.env.VITE_APP_ZELLE_EMAIL,
                    tag:import.meta.env.VITE_APP_ZELLE_TAG,
                    
                })
                
                break;

            case 'venmo':
                setPaymentDetails({
                    title:'Venmo',
                    method:'venmo',
                    email:import.meta.env.VITE_APP_VENMO_EMAIL,
                    tag:import.meta.env.VITE_APP_VENMO_TAG,
                    
                })
                break;

            case 'cashapp':
                setPaymentDetails({
                    title:'CashApp',
                    method:'cashapp',
                    email:import.meta.env.VITE_APP_CASHAPP_EMAIL,
                    tag:import.meta.env.VITE_APP_CASHAPP_TAG,
                    
                })
                break;
    
            default:
                // Handle other cases (or invalid `type`)
                console.log("Unknown payment type");
                break;
        }
    };
    return (
        <div className="container-fluid p-0 m-0 w-100 min-vh-100" style={{ zIndex: 5, overflowY: 'hidden' }}>
            {
                token ? <LoadingPage /> :
                    <>
                        <SideBarUnAuth onLogin={() => { setLoginModal(true); setOnSideNav(!onSideNav) }} toggleSideBar={() => setOnSideNav(!onSideNav)} onSideBar={onSideNav} />
                        <TopBarUnAuth
                            loginClicked={() => setLoginModal(true)}
                            signUpClicked={() => setRegModal(true)}
                            togSide={() => setOnSideNav(!onSideNav)} />

                        <div className="w-100 section-one shadow shadow-sm p-4">

                            <div className={`topBannerImg right mt-4 justify-content-center`} style={{ overflowX: 'scroll', scrollbarWidth: 'none' }}>
                                <img className="img" src={selectedProduct[0]?.prodImageUrl} />
                                <div className="d-flex gap-4 mt-3">
                                    {
                                        Array.from({ length: 5 }).map((_, index) => (
                                            <img key={index} className="moreImg" src={team} alt={`Team member ${index + 1}`} />
                                        ))
                                    }
                                </div>

                            </div>

                            <div className="left d-flex flex-column mt-4 gap-2">
                                <h5 className="fw-bolder fs-1">
                                    {selectedProduct[0]?.title}
                                </h5>
                                <p className="fw-bold">About this item</p>
                                <p>

                                    {
                                        selectedProduct[0]?.prodDescription
                                    }

                                </p>

                                <div className="">
                                    <p>Select your payment method</p>
                                    <div className="d-flex gap-2">
                                        {
                                            paymentMenthods.map((pay) => (
                                               <Image height={34} onClick={()=>handleShowPaymentInfo(pay.method)} 
                                               role="button" src={pay.icons} className={pay.icons}/>))
                                        }
                                    </div>
                                </div>

                                {/* <div className="d-flex gap-2">
                                    <Button>Contact Seller</Button>
                                    <Button variant="success">Add to cart</Button>
                                </div> */}
                            </div>


                        </div>





                        <div className="w-100 d-flex align-items-center flex-wrap px-4 mt-4 p-2">
                            <div className="bg-gray" style={{ width: '25%' }}>
                                <InfoCard title='Best Sellers in Clothing, Shoes & Jewelry' />
                            </div>
                            <div className="d-flex gap-2 py-4 align-items-center w-75" style={{ width: '75%', overflowX: 'scroll', overflowY: 'hidden', scrollbarWidth: 'none' }}>
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                            </div>
                        </div>




                        <div className="d-flex flex-column text-center justify-content-end py-3 mt-3" style={{ height: '350px', backgroundColor: '#E9F4F2', alignItems: 'center' }}>
                            <p className="m-0 p-0 fw-bold">Verified Sell All Rights Reserved</p>
                            <p className="m-0 p-0">(+234)8166064166</p>
                        </div>

                        <PaymentInfoModal paymentInfo={paymentDetails} on={paymentModal} off={() => setPaymentModal(false)} onLogin={() => setLoginModal(true)} />
                        <SignupModal on={regModal} off={() => setRegModal(false)} onLogin={() => setLoginModal(true)} />
                        <LoginModal on={loginModal} off={() => setLoginModal(false)} />
                    </>
            }
        </div>
    )
}
export default ProductViewPage;