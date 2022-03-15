import React, {FC} from 'react';
import {Layout} from "antd";
import { useNavigate } from 'react-router-dom';
import {useTypeSelector} from "../../../Hooks/useTypeSelector";

const NavBar:FC = () => {
    let {isAuth}=useTypeSelector(state=>state.auth)
    return (
        <Layout.Header>
            {
                isAuth
                    ?
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/">Taxi</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/cities">Города</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                           data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a className="dropdown-item" href="/order">Заказать такси</a></li>
                                            <li><a className="dropdown-item" href="/driver">Стать водителем</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/about" aria-disabled="true">О нас</a>
                                    </li>
                                </ul>
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{right:'0'}}>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/login">Выход</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/login">Павел</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    :
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/">Taxi</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/cities">Города</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                           data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a className="dropdown-item" href="#">Стать водителем</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/about" aria-disabled="true">О нас</a>
                                    </li>
                                </ul>
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{right:'0'}}>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/login">Вход</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Регистрация</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
            }
        </Layout.Header>
    );
};

export default NavBar;
