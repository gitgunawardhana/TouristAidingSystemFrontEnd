import React, {useState} from "react";
import "./CreateAccountCom.css"
import beach from "../../../Assets/CreateAccount/beachs.png";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css'
import {createSearchParams, Link} from "react-router-dom";
import {eventWrapper} from "@testing-library/user-event/dist/utils";
import axios from "axios";
import {useNavigate} from "react-router";
import Swal from "sweetalert2";

function CreateAccountCom() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleFirstNameChange = event => {
        setFirstName(event.target.value);
    }

    const handleLastNameChange = event => {
        setLastName(event.target.value);
    }

    const handleMobileChange = event => {
        setMobile(event.target.value);
    }

    const handleEmailChange = event => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value)
    }
    const handleSubmit = event => {

        const Details = {
            firstName: firstName,
            lastName: lastName,
            mobile: mobile,
            email: email,
            password: password
        }


        axios.post("http://localhost:8080/user/register", Details)
            .then(res => {
                if (res.data.success) {
                    // window.location = "/emailVerification"
                    // navigate("/emailVerification"))
                    navigate({
                        pathname: "/emailVerification",
                        search: createSearchParams({
                            email: email
                        }).toString()
                    });


                } else {
                    Swal.fire(
                        res.data.message,
                        'error'
                    ).then(r => {
                    })
                }

            })
            .catch(err => {
                Swal.fire(
                    'Failed',
                    'Something went wrong',
                    'error'
                ).then(r => {
                })
            })
    }

    // this.props.history.push({
    //     pathname: '/emailVerification',
    //     state: data // your data array of objects
    // })


    const [value, setValue] = useState()
    return (
        <div className="create-account-main-div">
            <section className="h-100 bg-dark bg-dark-col">
                <div className="container py-5 h-100 ">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col ">
                            <div className="card card-registration my-4 shadow-lg p-3 mb-5 bg-white rounded">
                                <div className="row g-0">
                                    <div className="col-xl-6 d-none d-xl-block">
                                        <img src={beach} alt="train" className="train-img img-fluid"/>
                                    </div>
                                    <div className="col-xl-6">
                                        <Link to="/">
                                            <button type="button" className="btn-close" aria-label="Close"></button>
                                        </Link>

                                        <div className="card-body p-md-5 text-black">
                                            <div className="logo-name shadow p-3 mb-5 bg-white rounded">
                                                <p className="sub-logo-name"> RodeSign</p>
                                            </div>


                                            <div className="acc-des text-uppercase text-center mb-5">
                                                Let’s Create Your Account
                                            </div>


                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="form3Example1m">First
                                                            name</label>
                                                        <input type="text"
                                                               id="form3Example1m"
                                                               className="form-control form-control-lg"
                                                               placeholder="First name"
                                                               onChange={handleFirstNameChange}
                                                               required={1}
                                                        />

                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="form3Example1n">Last
                                                            name</label>
                                                        <input type="text"
                                                               id="form3Example1n"
                                                               className="form-control form-control-lg"
                                                               placeholder="Last name"
                                                               onChange={handleLastNameChange}
                                                               required={1}
                                                        />

                                                    </div>
                                                </div>
                                            </div>


                                            <div className="row">
                                                <div className="form-outlin mb-4">
                                                    <div className="form-outline">
                                                        <label className="reg-ven-label">Phone Number</label>
                                                        <input type="tel" className="form-control"
                                                            // country="US"
                                                            // value={value}
                                                            // onChange={setValue}
                                                               onChange={handleMobileChange}
                                                               required={1}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example97">Email
                                                    ID</label>
                                                <input type="email"
                                                       id="form3Example97"
                                                       className="form-control form-control-lg"
                                                       placeholder="Email"
                                                       onChange={handleEmailChange}
                                                       required={1}
                                                />

                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example4cg">Password</label>
                                                <input type="password"
                                                       id="form3Example4cg"
                                                       className="form-control form-control-lg"
                                                       placeholder="Password"
                                                       onChange={handlePasswordChange}
                                                       required={1}
                                                />

                                            </div>


                                            <div className="d-flex justify-content-end pt-3">
                                                {/*<Link className="register-btn" to="/emailVerification">*/}
                                                <button type="button"
                                                        className="btn  btn-lg ms-2 btn-create"
                                                        onClick={handleSubmit}>Register
                                                </button>
                                                {/*</Link>*/}
                                            </div>

                                            <p className="text-center text-muted mt-5 mb-0">Have already an
                                                account?
                                                <Link to="/SignIn" className="fw-bold text-body">
                                                    Login here
                                                </Link>
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
    )

}

export default CreateAccountCom;