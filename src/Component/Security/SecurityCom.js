import React from "react";
import "./SecurityCom.css"
import {Link} from "react-router-dom";

function SecurityCom() {
    return (


        <div className="container-xl px-4 mt-4">
            {/*// <!-- Account page navigation-->*/}
            <nav className="nav nav-borders">
                <Link  to="/profile" className="nav-link  ms-0"
                >Profile</Link>
                <Link to="/paymentMethod" className="nav-link "
                >Payment Details</Link>
                <Link to="/security" className="nav-link active"
                >Security</Link>
                <Link to="/notificationSettings" className="nav-link"
                >Notifications</Link>
            </nav>
            <hr className="mt-0 mb-4"/>
            <div className="row row-margin">
                <div className="col-lg-8">
                    {/*// <!-- Change password card-->*/}
                    <div className="card mb-4" >
                        <div className="card-header">Change Password</div>
                        <div className="card-body">
                            <form>
                                {/*// <!-- Form Group (current password)-->*/}
                                <div className="mb-3">
                                    <label className="small mb-1" htmlFor="currentPassword">Current Password</label>
                                    <input className="form-control" id="currentPassword" type="password"
                                           placeholder="Enter current password"/>
                                </div>
                                {/*// <!-- Form Group (new password)-->*/}
                                <div className="mb-3">
                                    <label className="small mb-1" htmlFor="newPassword">New Password</label>
                                    <input className="form-control" id="newPassword" type="password"
                                           placeholder="Enter new password"/>
                                </div>
                                {/*// <!-- Form Group (confirm password)-->*/}
                                <div className="mb-3">
                                    <label className="small mb-1" htmlFor="confirmPassword">Confirm Password</label>
                                    <input className="form-control" id="confirmPassword" type="password"
                                           placeholder="Confirm new password"/>
                                </div>
                                <button className="btn btn-primary" type="button">Save</button>
                            </form>
                        </div>
                    </div>

                </div>
                <div className="col-lg-4">

                    {/*// <!-- Delete account card-->*/}
                    <div className="card mb-4">
                        <div className="card-header">Delete Account</div>
                        <div className="card-body">
                            <p>Deleting your account is a permanent action and cannot be undone. If you are sure you
                                want to delete your account, select the button below.</p>
                            <button className="btn btn-danger-soft text-danger" type="button">I understand, delete
                                my account
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
        ;

}

export default SecurityCom;