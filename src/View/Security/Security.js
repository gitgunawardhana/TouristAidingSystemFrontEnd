import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import "./Security.css";
import account from "../../Assets/AccountSettings/accpic.png";


function Security() {
    return (
        <div className={"security-page"}>
            <Navbar></Navbar>
            <div className="main-body">
                {/*info*/}
                <h1 className="acc-title">Security</h1>
                <p className="details-title"> Adjust your security settings and set up two-factor authentication.
                </p>
                <hr className="acc-set-hr"/>

                {/*password*/}
                <p className="details-title">Password
                    <a href="#" className="span-edit">Reset</a>
                </p>
                <p className="update-details-para">Reset your password regularly to keep your account secure</p>
                <hr className="acc-set-hr"/>

                {/*two fact authentication*/}
                <p className="details-title">Two-factor authentication
                    <a href="#" className="span-edit">Set up</a>
                </p>
                <p className="update-details-para">Add a phone number to set up two-factor authentication</p>
                <hr className="acc-set-hr"/>

                {/*active session*/}
                <p className="details-title"> Active session
                    <a href="#" className="span-edit">Sign out</a>
                </p>
                <p className="update-details-para">Selecting "Sign out" will sign you out from all devices except this one. This can take up to 10 minutes..</p>
                <hr className="acc-set-hr"/>

                {/*Delete account*/}
                <p className="details-title">Delete account
                    <a href="#" className="span-edit">Delete acoount</a>
                </p>
                <p className="update-details-para">Permanently delete your Booking.com account</p>
                <hr className="acc-set-hr"/>

            </div>
<div className="empty"></div>

        </div>
    );
}

export default Security;