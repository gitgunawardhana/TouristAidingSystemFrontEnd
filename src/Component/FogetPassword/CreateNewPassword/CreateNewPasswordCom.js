import React from "react";
import "./CreateNewPasswordCom.css"
import sigiriya from "../../../Assets/ForgetPassword/sigiriya.png";
import {Link} from "react-router-dom";

function CreateNewPasswordCom() {
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
                                            <img src={sigiriya} alt="train" className="train-img img-fluid"/>
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
                                                    Create a new password
                                                </div>

                                                <p className="text-center text-muted mt-5 mb-0 para-width" >Use a minimum of 10 characters, including uppercase letters, lowercase letters and numbers.
                                                </p>

                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="form3Example97">Password</label>
                                                    <input type="password" id="form3Example97"
                                                           className="form-control form-control-lg"
                                                           placeholder="Password"/>

                                                </div>

                                                <div className="form-outline mb-4">
                                                    <label className="form-label"
                                                           htmlFor="form3Example4cg">Confirm Password</label>
                                                    <input type="password" id="form3Example4cg"
                                                           className="form-control form-control-lg"
                                                           placeholder="Confirm Password"/>

                                                </div>


                                                <div className="d-flex justify-content-end pt-3">
                                                    <button type="button" className="btn  btn-lg ms-2 btn-login">Set new password
                                                    </button>
                                                </div>


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

export default CreateNewPasswordCom;