import React, {FC} from 'react';
import './Logincss.css';
import {Spring, animated, useTransition} from 'react-spring'
import {useLocation} from "react-router-dom";
import LoginForm from "./loginform";


const Login: FC = () => {
    return (
        <section className="gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" style={{borderRadius: "1rem;"}}>
                            <div className="card-body p-5 text-center">

                                <LoginForm/>

                                <div>
                                    <p className="mb-0">Don't have an account? <a href="#!"
                                                                                  className="text-white-50 fw-bold">Sign
                                        Up</a></p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
