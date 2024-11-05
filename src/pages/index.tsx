import { useEffect, useState } from "react";
import SignupModal from "../components/modals/signupmodal";
import { Button, Card} from "react-bootstrap";
import TopBarUnAuth from "../components/bars/topbar";
import team from '../assets/images/ecommerce.png';
import './index.css'
import SideBarUnAuth from "../components/bars/sidebar";
import LoginModal from "../components/modals/loginmodal";
import { useNavigate } from "react-router-dom";
import { getServices } from "../app/routes/service";
import { IService } from "../interfaces/service";
import { toast } from "react-toastify";
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
    const [services, setServices] = useState<IService[]>([]);
    const [allServices, setAllServices] = useState<IService[]>([]);
    const [currentServicesPage, setCurrentServicesPage] = useState(1);
    const [allServicePageNumber, setAllServicePageNumber] = useState(1);
    const [refData, setRefData] = useState(false);
    const [transit, setTransit] = useState(false);

    const LoadingPage = () => {

        useEffect(() => {
            token && navigate('/dashboard', { replace: true, preventScrollReset: true })
        }, [token])

        return (
            <div>loading</div>
        )
    }

    const handleGetServices = async () => {
        const res = await getServices(6, currentServicesPage)
        const resAll = await getServices(15, currentServicesPage)
        console.log(res)
        if (res.success) {
            setServices(res.data?.services);
            setAllServices(resAll.data?.services);
            setAllServicePageNumber(res.data.totalPages);
        } else {
            toast.error(res.error)
        }
    }

    useEffect(() => {
        handleGetServices()
    }, [refData])


    const ourValues = [
        {
            title: 'Well veted proffesionals',
            icon: 'bi bi-award-fill',
            description:
                'Get access to a pool of skilled industry professionals from all over Nigeria. for every task, at any price point.'
        },
        {
            title: 'Pay per project delivery',
            icon: 'bi bi-currency-exchange',
            description:
                'No monthly salary, just project-based pricing. Payments only get released when you approve.'
        },
        {
            title: 'No delay in delivery',
            icon: 'bi bi-stopwatch-fill',
            description:
                'Filter to find the right professionals quickly and get great work delivered in no time, every time.'
        },
        {
            title: '24/7 Customer support',
            icon: 'bi bi-headset',
            description:
                'Chat with our team to get your questions answered or resolve any issues with your orders.'
        }

    ]



    const handleNextService = () => {
        setTransit(!transit)
        if (currentServicesPage == allServicePageNumber) {
            setCurrentServicesPage(1);
            setRefData(!refData)
        } else {
            setCurrentServicesPage(currentServicesPage + 1);
            setRefData(!refData)
        }

    }
    const handlePrevService = () => {
        setTransit(!transit)
        if (currentServicesPage == 1) {
            setCurrentServicesPage(1)
            setRefData(!refData)
        } else {
            setCurrentServicesPage(curr => curr - 1)
            setRefData(!refData)
        }

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
                                <InfoCard />
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



                        {
                            services.length > 0 &&
                            <div className="w-100 available-services mt-3 section-two">

                                <h3 className="text-center">Available Services</h3>
                                <div className="w-100 d-flex px-4 justify-content-center align-items-center mt-4">
                                    <i className="bi bi-arrow-left-circle-fill text-primary" role="button" onClick={() => handlePrevService()}
                                        style={{ fontSize: '1.5em' }}
                                    ></i>
                                    <div className="d-flex w-50 px-0 gap-2  justify-content-center align-items-center service-holder"
                                        style={{ flexWrap: 'wrap', transition: 'all 1s ease-in' }}>
                                        {
                                            services.map((serv: IService, index: number) => (
                                                <div onClick={() => navigate(`/category-view/${serv._id}`)} role="button" key={index} className={`d-flex flex-column card-holder gap-2 align-items-center ${transit && 'slide-form'}`}
                                                    style={{ maxWidth: '7em', maxHeight: '10em', }}>
                                                    <Card className="shadow-lg border-0 card"
                                                        style={{ minWidth: '6em', minHeight: '6em' }}>
                                                        <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                                                            <i className={` ${serv.icon}`} style={{ fontSize: '2em' }}></i>
                                                        </Card.Body>
                                                    </Card>
                                                    <p className="niramit-semibold text-center"
                                                        style={{ textWrap: 'wrap', wordWrap: 'break-word' }}>{serv.title}</p>
                                                </div>

                                            ))
                                        }
                                    </div>
                                    <i className="bi bi-arrow-right-circle-fill text-primary" role="button" onClick={() => handleNextService()}
                                        style={{ fontSize: '1.5em' }}></i>
                                </div>
                            </div>}

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
                                    {
                                        allServices.map((serv: any, index: number) => (
                                            <div onClick={() => navigate(`/category-view/${serv._id}`)} key={index} role="button" className=""
                                                style={{ minWidth: '10em', maxHeight: '15em', minHeight: '15em' }}>
                                                <Card className="shadow-sm border-0"
                                                    style={{ minWidth: '10em', minHeight: '14em', backgroundColor: serv.colorCode }}>
                                                    <Card.Body className="text-light">
                                                        <p className="niramit-semibold text-start"
                                                            style={{ textWrap: 'wrap', wordWrap: 'break-word' }}>{serv.title}</p>
                                                        <Card className="bg-light d-flex justify-content-center align-items-center w-100" style={{ minHeight: '7em' }}>
                                                            <i className={` ${serv.icon}`} style={{ fontSize: '2em' }}></i>
                                                        </Card>
                                                    </Card.Body>
                                                </Card>

                                            </div>

                                        ))
                                    }
                                </div>

                            </div>
                        </div>

                        <div className="w-100 mt-4 section-4">

                            <h3 className="px-3 w-75">
                                Connecting you to a whole new approach to service delivery.
                            </h3>

                        </div>

                        <div className="w-100 mt-5 px-3 section-5">
                            {
                                ourValues.map((values, index: number) =>
                                    <div key={index} className="px-2 gap-3 d-flex flex-column">
                                        <div className="d-flex gap-2 align-items-center">
                                            <i className={`bi ${values.icon}`} style={{ fontSize: '1.7em' }}></i>
                                            <h5>{values.title}</h5>
                                        </div>

                                        <p className="px-3">
                                            {values.description}
                                        </p>

                                    </div>
                                )
                            }

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