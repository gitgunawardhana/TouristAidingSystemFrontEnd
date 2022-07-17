import React, {useState} from "react";
import "./EmailVerify.css"
import colombo from "../../../Assets/CreateAccount/colombo.png";
import 'react-phone-number-input/style.css'
import Form from 'react-bootstrap/Form';

function EmailVerify() {
    const [value, setValue] = useState()
    return (
        <div className="create-account-main-div">
            <section className="h-100 bg-dark">
                <div className="container py-5 h-100 ">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card card-registration my-4 shadow-lg p-3 mb-5 bg-white rounded ">
                                <div className="row g-0">
                                    <div className="col-xl-6 d-none d-xl-block">
                                        <img src={colombo} alt="train" className="train-img img-fluid"/>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="card-body p-md-5 text-black sub-form">
                                            <div className="logo-name shadow p-3 mb-5 bg-white rounded logo-name-sub">
                                                <p className="sub-logo-name"> RodeSign</p>
                                            </div>


                                            <div className="acc-des text-uppercase text-center mb-5 acc-des-sub">
                                                Email Verification
                                            </div>

                                            <p className="text-center text-muted mt-5 mb-0">We’ve sent a 4-digit
                                                verification code to your email. <br/>
                                                Please provide it down below

                                            </p>


                                            <div className="form-outline">
                                                <label className="form-label" htmlFor="form3Example1w"
                                                       placeholder="Verification Code">Verification Code</label>
                                                <input type="text" id="form3Example1w" className="form-control" placeholder="Verification Code"/>



                                            </div>


                                            <div className="d-flex justify-content-end pt-3">
                                                <button type="button" className="btn  btn-lg ms-2 btn-create">VERIFY
                                                </button>
                                            </div>

                                            <p className="text-center text-muted mt-5 mb-0">Didn’t receive the code? <a
                                                href="#!"
                                                className="fw-bold text-body">Resend</a>
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

    );
}

export default EmailVerify;