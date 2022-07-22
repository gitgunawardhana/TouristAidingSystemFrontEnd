import React from "react";
import "./ForgetPasswordCom.css"
import forgetEmail from "../../../Assets/ForgetPassword/forgetpassword.jpg"

function ForgetPasswordCom() {
    return (
        <div className="create-account-main-div ">
            <section className="h-100 bg-dark bg-dark-col ">
                <div className="container py-5 h-100  ">
                    <div className="row d-flex justify-content-center align-items-center h-100 section-div">
                        <div className="col ">
                            <div className="card card-registration my-4 shadow-lg p-3 mb-5 bg-white rounded ">
                                <div className="row g-0 ">
                                    <div className="col-xl-6 d-none d-xl-block">
                                        <img src={forgetEmail} alt="train" className="train-img img-fluid "/>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="card-body p-md-5 text-black sub-form">
                                            <div className="logo-name shadow p-3 mb-5 bg-white rounded logo-name-sub">
                                                <p className="sub-logo-name"> RodeSign</p>
                                            </div>


                                            <div className="acc-des text-uppercase text-center mb-5 acc-des-sub">
                                                Forgotten your password?
                                            </div>

                                            <p className="text-center text-muted mt-5 mb-0">No problem! We'll send you a link to reset it. Please enter the email address you use to sign in to Roadsign.com. <br/>

                                            </p>


                                            <div className="form-outline">
                                                <label className="form-label" htmlFor="form3Example1w"
                                                       placeholder="Verification Code">Your email address
                                                </label>
                                                <input type="text" id="form3Example1w" className="form-control" placeholder="Email address"/>



                                            </div>


                                            <div className="d-flex justify-content-end pt-3">
                                                <button type="button" className="btn  btn-lg ms-2 btn-create">SENT RESET LINK
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


    );
}

export default ForgetPasswordCom;
