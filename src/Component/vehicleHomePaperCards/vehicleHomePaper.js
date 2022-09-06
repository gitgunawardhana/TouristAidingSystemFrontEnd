import React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import "../vehicleHomePaperCards/vehicleHomePaper.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Image1 from '../../Assets/carHomeServicesProvide/customer-service 1.png';
import Image2 from '../../Assets/carHomeServicesProvide/customer-service 1 (1).png';
import Image3 from '../../Assets/carHomeServicesProvide/customer-service 1 (2).png';





const VehicleHomePaper = () => {
    return <>
        <Box id="innerCss"
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 400,
                    height: 200,
                    borderRadius: 10
                },
            }}
        >

            <Card sx={{ maxWidth: 400 }}>
                <CardMedia id="customermedia1"
                    component="img"
                    height="140"
                    image={Image1}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" id="contentmine">
                        24/7 CUSTOMER SERVICE
                    </Typography>

                </CardContent>
            </Card>
            <Card sx={{ maxWidth: 400 }}>
                <CardMedia id="customermedia1"
                    component="img"
                    height="140"
                    image={Image2}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" id="contentmine">
                        FREE CANCELLATION ON MOST
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ maxWidth: 400 }}>
                <CardMedia id="customermedia1"
                    component="img"
                    height="140"
                    image={Image3}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" id="contentmine">
                        EXCELLENT CUSTOMER REVIEWS
                    </Typography>

                </CardContent>
            </Card>
        </Box></>;
};

export default VehicleHomePaper;
