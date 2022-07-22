import React, {useEffect} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Hotel from '../../../Assets/AccommodationTypes/hotel.png';
import Resort from '../../../Assets/AccommodationTypes/resort.png';
import Cabin from '../../../Assets/AccommodationTypes/cabin.png';
import Apartment from '../../../Assets/AccommodationTypes/apartment.png';
import Cottage from '../../../Assets/AccommodationTypes/cottage.png';
import Camping from '../../../Assets/AccommodationTypes/camping.png';
import "./AccommodationTypeSlideShow.css";
import Aos from "aos";

function AccommodationTypeSlideShow() {

    const types = [
        {
            "name": "Hotels",
            "img": Hotel
        },
        {
            "name": "Resorts",
            "img": Resort
        },
        {
            "name": "Cabins",
            "img": Cabin
        },

        {
            "name": "Apartments",
            "img": Apartment
        },
        {
            "name": "Cottages",
            "img": Cottage
        },
        {
            "name": "Camping",
            "img": Camping
        },
    ];

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className="slide-show" data-aos="fade-up">
            <h4>Look into Different Types of Lodgings</h4>
            {types.map((item) => (
                <Card className="type-card">
                    <CardMedia
                        component="img"
                        height="150"
                        image={item.img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography align='center' gutterBottom variant="p" component="div">
                            {item.name}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

export default AccommodationTypeSlideShow;