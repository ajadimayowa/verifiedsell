import { useEffect, useState } from "react";
import SignupModal from "../components/modals/signupmodal";
import { Button, Card } from "react-bootstrap";
import TopBarUnAuth from "../components/bars/topbar";
import team from '../assets/images/ecommerce.png';
import './index.css'
import SideBarUnAuth from "../components/bars/sidebar";
import LoginModal from "../components/modals/loginmodal";
import { useNavigate } from "react-router-dom";
import playstore from '../assets/pngs/playstore.png';
import appstore from '../assets/pngs/appstore.png';
import CategoryCard from "../components/cards/categoryCard";
import ProductCard from "../components/cards/productCard";
import InfoCard from "../components/cards/infoCard";
import { productCategories, products } from "../constants";
import { IProduct } from "./product-view-page";

const HomePage = () => {
    const navigate = useNavigate()
    const token: string = localStorage.getItem('userToken') || ''
    const [regModal, setRegModal] = useState(false);
    const [loginModal, setLoginModal] = useState(false);
    const [onSideNav, setOnSideNav] = useState(false);
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



    return (
        <div className="container-fluid p-0 m-0 w-100" style={{ zIndex: 5 }}>
            {
                token ? <LoadingPage /> :
                    <>
                        <SideBarUnAuth onLogin={() => { setLoginModal(true); setOnSideNav(!onSideNav) }} toggleSideBar={() => setOnSideNav(!onSideNav)} onSideBar={onSideNav} />
                        <TopBarUnAuth
                            loginClicked={() => setLoginModal(true)}
                            signUpClicked={() => setRegModal(true)}
                            togSide={() => setOnSideNav(!onSideNav)} />
                        <div className="w-100 section-one bg-primary text-light p-4">

                            <div className="left d-flex flex-column mt-4 gap-2">
                                <h5 className="fw-bolder fs-1">
                                    Welcome to Verified Sell – Your trusted marketplace for quality products,
                                    by verified sellers.
                                </h5>
                                <p>
                                    Verified Sell connects you to a curated selection of reliable sellers offering top-quality products at competitive prices. Experience secure shopping and exceptional customer support with every purchase.
                                </p>
                                <div className="d-flex gap-2">
                                    <img role="button" src={playstore} height={50} />
                                    <img role="button" src={appstore} height={50} />

                                </div>
                            </div>
                            <div className={`topBannerImg right mt-4 justify-content-center`}>
                                <img className="" src={team} />
                            </div>

                        </div>

                        <div className="w-100 section-one bg-light px-4">
                            <h3 className="text-center w-100 p-3">Explore Categories</h3>
                            <div className="d-flex w-100 align-items-center" style={{ height: 230, overflowX: 'scroll', scrollbarWidth: 'none' }}>
                                {
                                    productCategories.map((product) => (
                                        <CategoryCard categoryTitle={product.title} imageUrl={product.catImageUrl} />
                                    ))
                                }
                            </div>
                        </div>

                        <div className="w-100 section-one px-4" style={{ backgroundColor: `rgb(221, 252, 252)` }}>
                            <h3 className="text-center w-100 p-0 mt-4">Hot Deals</h3>
                            <div className="d-flex w-100 p-0 mt-4 gap-2" style={{ height: 400, overflowX: 'scroll', overflowY: 'hidden', scrollbarWidth: 'none' }}>
                                {
                                    products.filter((prod: IProduct) => prod.section == 'hotdeals').map((prod: IProduct) => (<ProductCard prodId={prod.id} productTitle={prod.title} productPrice={prod.price} productImage={prod.prodImageUrl} />))
                                }
                            </div>
                        </div>

                        <h2 className="fw-bold w-100 p-3 mt-4">Best Sellers in Clothing, Shoes & Jewelry</h2>
                        <div className="w-100 d-flex px-4 mt-4 gap-2 p-2" style={{ width: '100%', overflowX: 'scroll', overflowY: 'hidden', scrollbarWidth: 'none' }}>
                            <InfoCard imgUrl={`https://verifiedsell.s3.eu-north-1.amazonaws.com/verifiedsell-assets/product-pictures/Nike+Travis+Scott+Air+Jordan+1+Low+OG+SP+EU+49.5+US+15+Medium+Olive+Reverse+NEW.png`} />
                            {
                                products.filter((prod: IProduct) => prod.section == 'fashion').map((prod: IProduct) => (<ProductCard prodId={prod.id} productTitle={prod.title} productPrice={prod.price} productImage={prod.prodImageUrl} />))
                            }
                        </div>

                        <h2 className="fw-bold w-100 p-3 mt-4">Must-haves for content creators and streamers.</h2>
                        <div className="w-100 d-flex px-4 mt-4 gap-2 p-2" style={{ width: '100%', overflowX: 'scroll', overflowY: 'hidden', scrollbarWidth: 'none' }}>
                            <InfoCard imgUrl={'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/truckBus.png'} />
                            {
                                products.filter((prod: IProduct) => prod.section == 'content').map((prod: IProduct) => (<ProductCard prodId={prod.id} productTitle={prod.title} productPrice={prod.price} productImage={prod.prodImageUrl} />))
                            }
                        </div>

                        <h2 className="fw-bold w-100 p-3 mt-4">Best Deals on Sport & Fitness.</h2>
                        <div className="w-100 d-flex px-4 mt-4 gap-2 p-2" style={{ width: '100%', overflowX: 'scroll', overflowY: 'hidden', scrollbarWidth: 'none' }}>
                            <InfoCard imgUrl={'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/truckBus.png'} />
                            {
                                products.filter((prod: IProduct) => prod.section == 'fitness').map((prod: IProduct) => (<ProductCard prodId={prod.id} productTitle={prod.title} productPrice={prod.price} productImage={prod.prodImageUrl} />))
                            }
                        </div>

                        <h2 className="fw-bold w-100 p-3 mt-4">Best Deals on laptops and Elecronics.</h2>
                        <div className="w-100 d-flex px-4 mt-4 gap-2 p-2" style={{ width: '100%', overflowX: 'scroll', overflowY: 'hidden', scrollbarWidth: 'none' }}>
                            <InfoCard imgUrl={'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/truckBus.png'} />
                            {
                                products.filter((prod: IProduct) => prod.section == 'electronics').map((prod: IProduct) => (<ProductCard prodId={prod.id} productTitle={prod.title} productPrice={prod.price} productImage={prod.prodImageUrl} />))
                            }
                        </div>

                        <h2 className="fw-bold w-100 p-3 mt-4">Automobile and Machines.</h2>
                        <div className="w-100 d-flex px-4 mt-4 gap-2 p-2" style={{ width: '100%', overflowX: 'scroll', overflowY: 'hidden', scrollbarWidth: 'none' }}>
                            <InfoCard imgUrl={'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/truckBus.png'} />
                            {
                                products.filter((prod: IProduct) => prod.section == 'auto').map((prod: IProduct) => (<ProductCard prodId={prod.id} productTitle={prod.title} productPrice={prod.price} productImage={prod.prodImageUrl} />))
                            }
                        </div>

                        <h2 className="fw-bold w-100 p-3 mt-4">Beauty, Cosmetics & Personal Care.</h2>
                        <div className="w-100 d-flex px-4 mt-4 gap-2 p-2" style={{ width: '100%', overflowX: 'scroll', overflowY: 'hidden', scrollbarWidth: 'none' }}>
                            <InfoCard imgUrl={'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/truckBus.png'} />
                            {
                                products.filter((prod: IProduct) => prod.section == 'cosmetics').map((prod: IProduct) => (<ProductCard prodId={prod.id} productTitle={prod.title} productPrice={prod.price} productImage={prod.prodImageUrl} />))
                            }
                        </div>

                        <div className="d-flex text-center p-3">

                            <hr className="px-3 w-100" />
                        </div>

                        <div className="d-flex justify-content-center w-100 mt-5 section-6">
                            <Card className="shadow-sm border-0 bg-primary"
                                style={{ minWidth: '20em', minHeight: '17em' }}>
                                <Card.Body className="d-flex text-light flex-column align-items-center justify-content-center">
                                    <i className="" style={{ fontSize: '2em' }}></i>
                                    <h3 className="niramit-semibold text-center"
                                        style={{ textWrap: 'wrap', wordWrap: 'break-word' }}>
                                        Shop with confidence!!!
                                    </h3>
                                    <Button
                                        onClick={() => setRegModal(true)}
                                        className="bg-secondary rounded border-0 rounded-4 text-light"
                                        style={{ minWidth: '10em', minHeight: '3.5em', maxWidth: '10em' }}
                                    >Get Started</Button>
                                </Card.Body>
                            </Card>

                        </div>
                        <div className="d-flex flex-column text-center justify-content-end py-3 mt-3" style={{ height: '100px', backgroundColor: '#E9F4F2', alignItems: 'center' }}>
                            <p className="m-0 p-0 fw-bold">Verified Sell All Rights Reserved.</p>
                        </div>

                        <SignupModal on={regModal} off={() => setRegModal(false)} onLogin={() => setLoginModal(true)} />
                        <LoginModal on={loginModal} off={() => setLoginModal(false)} />
                    </>
            }
        </div>
    )
}
export default HomePage;