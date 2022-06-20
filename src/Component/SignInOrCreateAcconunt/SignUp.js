import React from "react";
import "./SignUp.css"
import Navbar from "../Navbar/Navbar";

function SignInComponent() {
    return (
            <div className="shadow-lg p-3 mb-5 bg-white rounded main-div">


            <ul class="nav nav-pills nav-justified mb-3 " id="ex1" role="tablist">
                <li class="nav-item" role="presentation">
                    <a
                        class="nav-link active  nav-bar-link"
                        id="tab-login"
                        data-toggle="pill"
                        href="#pills-login"
                        role="tab"
                        aria-controls="pills-login"
                        aria-selected="true"
                    >Login</a
                    >
                </li>
                <li class="nav-item" role="presentation">
                    <a
                        class="nav-link"
                        id="tab-register"
                        data-toggle="pill"
                        href="#pills-register"
                        role="tab"
                        aria-controls="pills-register"
                        aria-selected="false"
                    >Register</a
                    >
                </li>
            </ul>

            <div class="tab-content">
                <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                    <form>
                        <div class="text-center mb-3">
                            <p>Sign in with:</p>
                            <button type="button" class="btn btn-primary btn-floating mx-1">
                                <i class="fab fa-facebook-f"></i>
                            </button>

                            <button type="button" class="btn btn-primary btn-floating mx-1">
                                <i class="fab fa-google"></i>
                            </button>

                            <button type="button" class="btn btn-primary btn-floating mx-1">
                                <i class="fab fa-twitter"></i>
                            </button>

                            <button type="button" class="btn btn-primary btn-floating mx-1">
                                <i class="fab fa-github"></i>
                            </button>
                        </div>

                        <p class="text-center">or:</p>


                        <div class="form-outline mb-4">
                            <input type="email" id="loginName" class="form-control" />
                            <label class="form-label" for="loginName">Email or username</label>
                        </div>


                        <div class="form-outline mb-4">
                            <input type="password" id="loginPassword" class="form-control" />
                            <label class="form-label" for="loginPassword">Password</label>
                        </div>


                        <div class="row mb-4">
                            <div class="col-md-6 d-flex justify-content-center">

                                <div class="form-check mb-3 mb-md-0">
                                    <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                                    <label class="form-check-label" for="loginCheck"> Remember me </label>
                                </div>
                            </div>

                            <div class="col-md-6 d-flex justify-content-center">

                                <a href="#!">Forgot password?</a>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>


                        <div class="text-center">
                            <p>Not a member? <a href="#!">Register</a></p>
                        </div>
                    </form>
                </div>
                <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                    <form>
                        <div class="text-center mb-3">
                            <p>Sign up with:</p>
                            <button type="button" class="btn btn-primary btn-floating mx-1">
                                <i class="fab fa-facebook-f"></i>
                            </button>

                            <button type="button" class="btn btn-primary btn-floating mx-1">
                                <i class="fab fa-google"></i>
                            </button>

                            <button type="button" class="btn btn-primary btn-floating mx-1">
                                <i class="fab fa-twitter"></i>
                            </button>

                            <button type="button" class="btn btn-primary btn-floating mx-1">
                                <i class="fab fa-github"></i>
                            </button>
                        </div>

                        <p class="text-center">or:</p>


                        <div class="form-outline mb-4">
                            <label className="form-label" htmlFor="registerName">Name</label>
                            <input type="text" id="registerName" class="form-control" placeholder="Name" />

                        </div>


                        <div class="form-outline mb-4">
                            <label className="form-label" htmlFor="registerUsername">Username</label>
                            <input type="text" id="registerUsername" class="form-control" placeholder="Username" />

                        </div>


                        <div class="form-outline mb-4">
                            <label className="form-label" htmlFor="registerEmail">Email</label>
                            <input type="email" id="registerEmail" class="form-control" placeholder="Email" />

                        </div>

                        <div class="form-outline mb-4">
                            <label className="form-label" htmlFor="registerPassword">Password</label>
                            <input type="password" id="registerPassword" class="form-control" placeholder="Password" />

                        </div>

                        <div class="form-outline mb-4">
                            <label className="form-label" htmlFor="registerRepeatPassword">Repeat password</label>
                            <input type="password" id="registerRepeatPassword" class="form-control" placeholder="Repeat password" />

                        </div>


                        <div class="form-check d-flex justify-content-center mb-4">
                            <input
                                class="form-check-input me-2"
                                type="checkbox"
                                value=""
                                id="registerCheck"
                                checked
                                aria-describedby="registerCheckHelpText"
                            />
                            <label class="form-check-label" for="registerCheck">
                                I have read and agree to the terms
                            </label>
                        </div>


                        <button type="submit" class="btn btn-primary btn-block mb-3">Sign in</button>
                    </form>
                </div>
            </div>



        </div>
    );
}

export default SignInComponent;