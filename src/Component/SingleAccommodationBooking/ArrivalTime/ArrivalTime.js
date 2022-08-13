import React from "react";
import "./ArrivalTime.css"

function ArrivalTime() {
    return (
        <div className="arrival-time-div">
            <div className="booking-details-div">
                <p className="arrival-details-heading ">Your booking details</p>
            </div>
            <div className="check-between-div">
                <p className="check-between-para">
                    You can check in between 12:00 and 22:30
                </p>
            </div>
            <form className="arrival-time-form">
                <label className="time-label">Add your estimated arrival time </label>
                    <input type="time" className='input-time-arrivel' />
            </form>

        </div>
    );


}

export default ArrivalTime;
