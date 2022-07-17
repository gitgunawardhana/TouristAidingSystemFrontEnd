import React from "react";
import "./Payment.css"
import {Link} from "react-router-dom";

function Payment() {
    return (

        <div className="container-xl px-4 mt-4">
            {/*// <!-- Account page navigation-->*/}
            <nav className="nav nav-borders">
                <Link to="/profile" className="nav-link  ms-0"
                >Profile</Link>
                <Link to="/paymentMethod" className="nav-link active"
                >Payment Details</Link>
                <Link to="/security" className="nav-link"
                >Security</Link>
                <Link to="/notificationSettings" className="nav-link "
                >Notifications</Link>
            </nav>
            <hr className="mt-0 mb-4"/>

                {/*// <!-- Payment methods card-->*/}
                <div className="card card-header-actions mb-4">
                    <div className="card-header">
                        Payment Methods
                        <button className="btn btn-sm btn-primary add-card-btn" type="button">Add Payment Method</button>
                    </div>
                    <div className="card-body px-0">
                        {/*// <!-- Payment method 1-->*/}
                        <div className="d-flex align-items-center justify-content-between px-4">
                            <div className="d-flex align-items-center">
                                <i className="fab fa-cc-visa fa-2x cc-color-visa"></i>
                                <div className="ms-4">
                                    <div className="small">Visa ending in 1234</div>
                                    <div className="text-xs text-muted">Expires 04/2024</div>
                                </div>
                            </div>
                            <div className="ms-4 small">
                                <div className="badge bg-light text-dark me-3">Default</div>
                                <a href="">Edit</a>
                            </div>
                        </div>
                        <hr/>
                            {/*// <!-- Payment method 2-->*/}
                            <div className="d-flex align-items-center justify-content-between px-4">
                                <div className="d-flex align-items-center">
                                    <i className="fab fa-cc-mastercard fa-2x cc-color-mastercard"></i>
                                    <div className="ms-4">
                                        <div className="small">Mastercard ending in 5678</div>
                                        <div className="text-xs text-muted">Expires 05/2022</div>
                                    </div>
                                </div>
                                <div className="ms-4 small">
                                    <a className="text-muted me-3" href="#!">Make Default</a>
                                    <a href="">Edit</a>
                                </div>
                            </div>
                            <hr/>
                                {/*// <!-- Payment method 3-->*/}
                                <div className="d-flex align-items-center justify-content-between px-4">
                                    <div className="d-flex align-items-center">
                                        <i className="fab fa-cc-amex fa-2x cc-color-amex"></i>
                                        <div className="ms-4">
                                            <div className="small">American Express ending in 9012</div>
                                            <div className="text-xs text-muted">Expires 01/2026</div>
                                        </div>
                                    </div>
                                    <div className="ms-4 small">
                                        <a className="text-muted me-3" href="">Make Default</a>
                                        <a href="">Edit</a>
                                    </div>
                                </div>
                    </div>
                </div>
                {/*// <!-- Billing history card-->*/}
                <div className="card mb-4">
                    <div className="card-header">Billing History</div>
                    <div className="card-body p-0">
                        {/*// <!-- Billing history table-->*/}
                        <div className="table-responsive table-billing-history">
                            <table className="table mb-0">
                                <thead>
                                <tr>
                                    <th className="border-gray-200" scope="col">Transaction ID</th>
                                    <th className="border-gray-200" scope="col">Date</th>
                                    <th className="border-gray-200" scope="col">Amount</th>
                                    <th className="border-gray-200" scope="col">Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>#39201</td>
                                    <td>06/15/2021</td>
                                    <td>$29.99</td>
                                    <td><span className="badge bg-light text-dark">Pending</span></td>
                                </tr>
                                <tr>
                                    <td>#38594</td>
                                    <td>05/15/2021</td>
                                    <td>$29.99</td>
                                    <td><span className="badge bg-success">Paid</span></td>
                                </tr>
                                <tr>
                                    <td>#38223</td>
                                    <td>04/15/2021</td>
                                    <td>$29.99</td>
                                    <td><span className="badge bg-success">Paid</span></td>
                                </tr>
                                <tr>
                                    <td>#38125</td>
                                    <td>03/15/2021</td>
                                    <td>$29.99</td>
                                    <td><span className="badge bg-success">Paid</span></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        </div>

);
}
export default Payment;