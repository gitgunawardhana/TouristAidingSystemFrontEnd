import React from "react";
import "./SignIn.css"
import beach from "../../Assets/CreateAccount/beach.png"
import {Link} from "react-router-dom";

function SignInCom() {
    return (
        <>
            <div className="create-account-main-div" >
                <section className="h-100 bg-dark bg-dark-col" >
                    <div className="container py-5 h-100 ">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col">
                                <div className="card card-registration my-4 shadow-lg p-3 mb-5 bg-white rounded ">
                                    <div className="row g-0">
                                        <div className="col-xl-6 d-none d-xl-block">
                                            <img src={beach} alt="train" className="train-img img-fluid"/>
                                        </div>
                                        <div className="col-xl-6">
                                            <Link to="/">
                                                <button type="button" className="btn-close" aria-label="Close"></button>
                                            </Link>
                                            <div className="card-body p-md-5 text-black sub-form">
                                                <div
                                                    className="logo-name shadow p-3 mb-5 bg-white rounded logo-name-sub">
                                                    <p className="sub-logo-name"> RodeSign</p>
                                                </div>


                                                <div className="acc-des text-uppercase text-center mb-5 acc-des-sub">
                                                    Welcome Back
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="form3Example97">Email
                                                        Address</label>
                                                    <input type="text" id="form3Example97"
                                                           className="form-control form-control-lg"
                                                           placeholder="Email Address"/>

                                                </div>

                                                <div className="form-outline mb-4">
                                                    <label className="form-label"
                                                           htmlFor="form3Example4cg">Password</label>
                                                    <input type="password" id="form3Example4cg"
                                                           className="form-control form-control-lg"
                                                           placeholder="Password"/>

                                                </div>


                                                <div className="d-flex justify-content-end pt-3">
                                                    <button type="button" className="btn  btn-lg ms-2 btn-login">Login
                                                    </button>
                                                </div>

                                                <p className="text-center text-muted mt-5 mb-0">New to RoadSign?
                                                    <Link to="/createAccount"
                                                          className="fw-bold text-body">Register</Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        </>
    );
}

export default SignInCom;