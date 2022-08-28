import React from "react";
import "./BookingDetailsComp.css"
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";

function BookingDetailsComp() {
    const bookingDetails = [
        {
            checkInTime:"11.00 pm",
            checkOutTime:"11.00 pm",
            checkInDay:"Thu, Aug  10 2022",
            checkOutDay:"Thu, Aug 15 2022",
            totalDay:"5"
        },
    ]
    return (
        <div className="booking-details-section">
            {bookingDetails.map((item) => (
                <div className="booking-details-div">
                    <p className="booking-details-heading ">Your booking details</p>
                    <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 3, md: 4}}>
                        <Grid item xs={5}>
                            <Item>
                                <p className="check-in padding-bot">
                                    Check-In
                                </p>
                                <p className="check-in-day padding-bot">
                                    {item.checkInDay}
                                </p>
                                <p className="check-in-time padding-bot">
                                    from {item.checkInTime}
                                </p>
                            </Item>
                        </Grid>
                        <Grid item xs={2}>
                            <div className="vr vertical-rule"></div>


                        </Grid>
                        <Grid item xs={5}>
                            <Item>
                                <p className="check-in padding-bot">
                                    Check-out
                                </p>
                                <p className="check-in-day padding-bot">
                                    {item.checkOutDay}
                                </p>
                                <p className="check-in-time padding-bot">
                                    from {item.checkOutTime}
                                </p>
                            </Item>
                        </Grid>
                    </Grid>
                    <div>
                        <p className="total-day">
                            Total days :  {item.totalDay} Days
                        </p>

                    </div>
                </div>
            ))}


        </div>

    );
}

export default BookingDetailsComp;