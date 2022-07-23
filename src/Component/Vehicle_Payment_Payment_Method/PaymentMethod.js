import React from "react";
import masterCard from '../../Assets/icons/master-card.jpg'
import paypal from '../../Assets/icons/paypal.jpg'
import './PaymentMethod.css'
const PaymentMethod = () => {
    return (
        <>
            <div className="payment">
                <label htmlFor="" className="d-flex align-items-center gap-2">
                    <input type="radio" />Direct Bank Transfer
                </label>
            </div>
            <div className="payment mt-3">
                <label htmlFor="" className="d-flex align-items-center gap-2">
                    <input type="radio" />cheque payment
                </label>
            </div>
            <div className="payment mt-3 d-flex align-items-center justify-content-between">
                <label htmlFor="" className="d-flex align-items-center gap-2">
                    <input type="radio" />Master Card
                </label>
                <img src={masterCard} />
            </div>
            <div className="payment mt-3 d-flex align-items-center justify-content-between">
                <label htmlFor="" className="d-flex align-items-center gap-2">
                    <input type="radio" />Paypal
                </label>
                <img src={paypal} />
            </div>
            <div className="payment text-end mt-5"><button>Reserve Now</button></div>
        </>
    );
};

export default PaymentMethod;
