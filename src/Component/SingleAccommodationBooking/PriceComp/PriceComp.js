import React from "react";
import "./PriceComp.css"
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";

function PriceComp() {
    const prices=[
        {
            price: "18000.00",
            days : 5,
        }
    ]

    return (
        <div className="price-com-div">
            {prices.map((item)=>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Item>
                            <p className="price-para">
                                Price
                            </p>
                            <p>
                                (for {item.days} day)
                            </p>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>
                            <p className="price-para">
                                LKR
                                {item.price}
                            </p>
                        </Item>
                    </Grid>
                </Grid>
            )}




        </div>
    );

}

export default PriceComp;
