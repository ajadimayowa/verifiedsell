import React from "react";
import { Button } from "react-bootstrap";
import style from './topbar.module.css';
import logo from '../../assets/pngs/vs-logo-light.png';
import { useNavigate } from "react-router-dom";
import CustomInput from "../inputs";

const TopBarUnAuth: React.FC<any> = ({ loginClicked,signUpClicked }) => {
    const navigate = useNavigate();

    const links = [
        { title: 'Categories', path: '', icon: '' },
        { title: 'My Account', path: '', icon: "bi bi-person", },
        { title: 'Cart', path: '', icon: "bi bi-cart3", count: '0' },
    ]
    return (
        <div className={`${style.topBar} bg-primary gap-3 sticky-top d-flex flex-row p-3 text-light align-items-center justify-content-between w-100`}
            style={{ minHeight: '75px' }}>
            <div className="px-3 gap-3 d-flex align-items-center flex-row">
                <img className="" role="button" src={logo} height={50} onClick={() => navigate('/')} />
            </div>

            <ul className="gap-5 m-0 p-0 flex-row align-items-center">
                <li className="list-group-item fw-medium d-flex gap-2">
                    <CustomInput type={'search'} />
                </li>
                {
                    links.map((link, index) => (
                        <li key={index} className="list-group-item fw-medium d-flex gap-2 align-items-center" role="button">
                            <i className={link.icon}></i>{link.title} <p className="p-0 m-0">{link.count}</p>
                        </li>
                    ))

                }

                <li onClick={loginClicked} className="list-group-item fw-medium" role="button">Login</li>
                <li className="d-flex flex-row align-items-center gap-2"><Button className=" bg-secondary px-3 fw-bold text-light" onClick={signUpClicked}>Sign up</Button>
                    <i className="bi bi-globe " role="button"></i>
                </li>
            </ul>
            <div className={`${style.toggler}`}>
                <i className="bi bi-list" id="toggle" style={{ fontSize: '1.5em' }} role="button"></i>
            </div>

        </div>
    )

}
export default TopBarUnAuth;