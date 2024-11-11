import { useEffect, useState } from "react";
import SignupModal from "../components/modals/signupmodal";
import { Button, Card} from "react-bootstrap";
import TopBarUnAuth from "../components/bars/topbar";
import team from '../assets/images/ecommerce.png';
import './index.css'
import SideBarUnAuth from "../components/bars/sidebar";
import LoginModal from "../components/modals/loginmodal";
import { useNavigate } from "react-router-dom";
// import { getServices } from "../app/routes/service";
// import { IService } from "../interfaces/service";
// import { toast } from "react-toastify";
import playstore from '../assets/pngs/playstore.png';
import appstore from '../assets/pngs/appstore.png';
import CategoryCard from "../components/cards/categoryCard";
import ProductCard from "../components/cards/productCard";
import InfoCard from "../components/cards/infoCard";

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
                                <CategoryCard />

                                <CategoryCard />
                                <CategoryCard />
                                <CategoryCard />
                                <CategoryCard />

                                <CategoryCard />
                                <CategoryCard />
                                <CategoryCard />
                                <CategoryCard />
                            </div>
                        </div>

                        <div className="w-100 section-one bg-light px-4 mt-4">
                            <h3 className="text-center w-100 p-3">Hot Deals</h3>
                            <div className="d-flex w-100 align-items-center  gap-2" style={{ height: 300, overflowX: 'scroll', overflowY: 'hidden', scrollbarWidth: 'none' }}>
                                <ProductCard prodId={872382} />
                                <ProductCard prodId={872382}/>
                                <ProductCard prodId={872382}/>
                                <ProductCard prodId={872382}/>

                                <ProductCard prodId={872382} />
                                <ProductCard prodId={872382}/>
                                <ProductCard prodId={872382}/>
                            </div>
                        </div>

                        <div className="w-100 d-flex align-items-center flex-wrap px-4 mt-4 p-2">
                            <div className="bg-gray" style={{width:'25%'}}>
                                <InfoCard title='Best Sellers in Clothing, Shoes & Jewelry' />
                            </div>
                            <div className="d-flex gap-2 py-4 align-items-center w-75" style={{ width:'75%', overflowX: 'scroll', overflowY: 'hidden', scrollbarWidth: 'none' }}>
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


                        <div className="w-100 d-flex align-items-center flex-wrap px-4 mt-4 p-2">
                            <div className="bg-gray" style={{width:'25%'}}>
                                <InfoCard title={'Must-haves for content creators and streamers.'} />
                            </div>
                            <div className="d-flex gap-2 py-4 align-items-center w-75" style={{ width:'75%', overflowX: 'scroll', overflowY: 'hidden', scrollbarWidth: 'none' }}>
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

                        <div className="w-100 d-flex align-items-center flex-wrap px-4 mt-4 p-2">
                            <div className="bg-gray" style={{width:'25%'}}>
                                <InfoCard title={'Best Deals on Sports & Outdoor.'} />
                            </div>
                            <div className="d-flex gap-2 py-4 align-items-center w-75" style={{ width:'75%', overflowX: 'scroll', overflowY: 'hidden', scrollbarWidth: 'none' }}>
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

                        <div className="w-100 d-flex align-items-center flex-wrap px-4 mt-4 p-2">
                            <div className="bg-gray" style={{width:'25%'}}>
                                <InfoCard title={'Best Deals on laptops and Elecronics'} />
                            </div>
                            <div className="d-flex gap-2 py-4 align-items-center w-75" style={{ width:'75%', overflowX: 'scroll', overflowY: 'hidden', scrollbarWidth: 'none' }}>
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

                        <div className="w-100 d-flex align-items-center flex-wrap px-4 mt-4 p-2">
                            <div className="bg-gray" style={{width:'25%'}}>
                                <InfoCard title={'Automobile and Machines.'} />
                            </div>
                            <div className="d-flex gap-2 py-4 align-items-center w-75" style={{ width:'75%', overflowX: 'scroll', overflowY: 'hidden', scrollbarWidth: 'none' }}>
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

                        <div className="w-100 d-flex align-items-center flex-wrap px-4 mt-4 p-2">
                            <div className="bg-gray" style={{width:'25%'}}>
                                <InfoCard title={'Beauty, Cosmetics & Personal Care.'} />
                            </div>
                            <div className="d-flex gap-2 py-4 align-items-center w-75" style={{ width:'75%', overflowX: 'scroll', overflowY: 'hidden', scrollbarWidth: 'none' }}>
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



                       

                        <div className="d-flex text-center p-3">

                            <hr className="px-3 w-100" />
                        </div>
                        <div className="w-100 mt-3 section-three" id="section-three">

                            <h3 className="text-center">Most Wanted Services</h3>
                            <div className="w-100 d-flex gap-2 px-2 justify-content-center align-items-center mt-4">
                                {/* <i className="bi bi-chevron-left" role="button" onClick={() => handlePrevServicePop(currentServicePopular)}></i> */}
                                <div className="d-flex gap-3 w-100  align-items-center slide-form"

                                    id="services"
                                    style={{ transition: 'all 1s ease-in', overflowX: 'scroll', maxWidth: '100%' }}>
                                    
                                </div>

                            </div>
                        </div>

                        <div className="w-100 mt-4 section-4">

                            <h3 className="px-3 w-75">
                                Connecting you to a whole new approach to service delivery.
                            </h3>

                        </div>

                        <div className="d-flex justify-content-center w-100 mt-5 section-6">
                            <Card className="shadow-sm border-0"
                                style={{ minWidth: '20em', minHeight: '17em', backgroundColor: '#8D493A' }}>
                                <Card.Body className="d-flex text-light flex-column align-items-center justify-content-center">
                                    <i className="" style={{ fontSize: '2em' }}></i>
                                    <h3 className="niramit-semibold text-center"
                                        style={{ textWrap: 'wrap', wordWrap: 'break-word' }}>
                                        Quality service at the comfort of Home
                                    </h3>
                                    <Button
                                        onClick={() => setRegModal(true)}
                                        className="bg-secondary rounded border-0 rounded-4 text-light"
                                        style={{ minWidth: '10em', minHeight: '3.5em', maxWidth: '10em' }}
                                    >Get Started</Button>
                                </Card.Body>
                            </Card>

                        </div>
                        <div className="d-flex flex-column text-center justify-content-end py-3 mt-3" style={{height:'300px', backgroundColor: '#E9F4F2', alignItems:'center' }}>
                            <p className="m-0 p-0 fw-bold">Verified Sell All Rights Reserved</p>
                            <p className="m-0 p-0">(+234)8166064166</p>
                        </div>

                        <SignupModal on={regModal} off={() => setRegModal(false)} onLogin={() => setLoginModal(true)} />
                        <LoginModal on={loginModal} off={() => setLoginModal(false)} />
                    </>
            }
        </div>
    )
}
export default HomePage;