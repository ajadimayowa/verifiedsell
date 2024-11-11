import { useEffect, useState } from "react";
import SignupModal from "../components/modals/signupmodal";
import TopBarUnAuth from "../components/bars/topbar";
import team from '../assets/images/ecommerce.png';
import './prodView.css'
import SideBarUnAuth from "../components/bars/sidebar";
import LoginModal from "../components/modals/loginmodal";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/cards/productCard";
import InfoCard from "../components/cards/infoCard";
import { Button } from "react-bootstrap";

const ProductViewPage = () => {
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
                                <img className="img" src={team} />
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
                                    Macbook Pro 2024 | 16', Silver.
                                </h5>
                                <p className="fw-bold">About this item</p>
                                <p>

                                    【Multi-Platform Compatible】Support PlayStation 4, New Xbox One, PC, Nintendo 3DS, Laptop, PSP, Tablet, iPad, Computer, Mobile Phone. Please note you need an extra Microsoft Adapter (Not Included) when connect with an old version Xbox One controller.
                                    【Surrounding Stereo Subwoofer】Clear sound operating strong brass, splendid ambient noise isolation and high precision 40mm magnetic neodymium driver, acoustic positioning precision enhance the sensitivity of the speaker unit, bringing you vivid sound field, sound clarity, shock feeling sound. Perfect for various games like Halo 5 Guardians, Metal Gear Solid, Call of Duty, Star Wars Battlefront, Overwatch, World of Warcraft Legion, etc.
                                    【Noise Isolating Microphone】Headset integrated onmi-directional microphone can transmits high quality communication with its premium noise-concellng feature, can pick up sounds with great sensitivity and remove the noise, which enables you clearly deliver or receive messages while you are in a game. Long flexible mic design very convenient to adjust angle of the microphone.
                                    【Great Humanized Design】Superior comfortable and good air permeability protein over-ear pads, muti-points headbeam, acord with human body engineering specification can reduce hearing impairment and heat sweat.Skin friendly leather material for a longer period of wearing. Glaring LED lights desigend on the earcups to highlight game atmosphere.
                                    【Effortlessly Volume Control】High tensile strength, anti-winding braided USB cable with rotary volume controller and key microphone mute effectively prevents the 49-inches long cable from twining and allows you to control the volume easily and mute the mic as effortless volume control one key mute.
                                </p>
                                <div className="d-flex gap-2">
                                <Button>Contact Seller</Button>
                                <Button variant="success">Add to cart</Button>
                                </div>
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

                        <SignupModal on={regModal} off={() => setRegModal(false)} onLogin={() => setLoginModal(true)} />
                        <LoginModal on={loginModal} off={() => setLoginModal(false)} />
                    </>
            }
        </div>
    )
}
export default ProductViewPage;