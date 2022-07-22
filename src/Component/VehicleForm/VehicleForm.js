import React from "react";
import "./VehicleForm.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {DatePicker, LocalizationProvider, MobileDatePicker} from "@mui/x-date-pickers";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import Grid from "@mui/material/Grid";
import * as FaIcons from "react-icons/fa";
import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router";
import StartDate from '../../Assets/VehicleFormIcons/start-date.png';
import EndDate from '../../Assets/VehicleFormIcons/end-date.png';
import Location from '../../Assets/VehicleFormIcons/location.png';
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {Divider} from "@mui/material";

//________________

function VehicleForm() {

    const [checkInTime, setCheckInTime] = React.useState(Date.now());
    const handleCheckInTime = (newValue) => {
        setCheckInTime(newValue);
    };
    const [checkOutTime, setCheckOutTime] = React.useState(Date.now());
    const handleCheckOutTime = (newValue) => {
        setCheckOutTime(newValue);
    };

    const SearchButton = styled(Button)(({theme}) => ({
        backgroundColor: '#00565b',
        color: 'white',
        '&:hover': {
            backgroundColor: '#00565b',
        },
        width: '50%',
        marginLeft: '25%',
        marginTop: '10px',
        marginBottom: '10px',
        borderRadius: '10px',
        boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.4)',
        padding: '5px',
    }));

    const CustomCheckBox = styled(Checkbox)(({theme}) => ({
        backgroundColor: '#00565b',
        color: 'white',
        '&:hover': {
            backgroundColor: '#00565b',
        },
        width: '50%',
        marginLeft: '25%',
        marginTop: '10px',
        marginBottom: '10px',
        borderRadius: '10px',
        boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.4)',
        padding: '5px',
    }));

    const price= [""];
    const carspecs = ["Air Conditioned", "4+ Doors"];
    const transmission1 = ["Automatic", "Manual"];
    const transmission2 = ["Small","Medium","Large","Estate","Premium","People Carrier","SUV"];

  return (
    //change classname here after altering css
    <div className="filter-section">
        <h5><b>Find Vehicles</b></h5>

        //Form begins here.. 
        <Box
                component="form"
                noValidate
                autoComplete="off"
                className="find-accommodation-form"
            >
                <div>
                    <Grid container spacing={3}>
                        <Grid item xs={1}>
                            <img src={"../../Assets/VehicleFormIcons/location.png"} alt="Location" className="find-accommodation-form-icon"/>
                        </Grid>
                        <Grid item xs={11}>
                            <TextField id="destination"
                                       label="Pick From"
                                       type="text"
                                       sx={{m: 1, width: '99%'}}/>
                        </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                        <Grid item xs={1}>
                            <img src={"../../Assets/VehicleFormIcons/location.png"} alt="Location" className="find-accommodation-form-icon"/>
                        </Grid>
                        <Grid item xs={11}>
                            <TextField id="destination"
                                       label="Drop At"
                                       type="text"
                                       sx={{m: 1, width: '99%'}}/>
                        </Grid>
                    </Grid>

                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <Grid container spacing={3}>
                            <Grid item xs={1}>
                                <img src={"../../Assets/VehicleFormIcons/start-date.png"} alt="Start Date" className="find-accommodation-form-icon"/>
                            </Grid>
                            <Grid item xs={11}>
                                <DatePicker
                                    label="Start day of your travel"
                                    inputFormat="DD/MM/yyyy"
                                    value={checkInTime}
                                    onChange={handleCheckInTime}
                                    renderInput={(params) => <TextField {...params} sx={{m: 1, width: '99%'}}/>}
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={3}>
                            <Grid item xs={1}>
                                <img src={"../../Assets/VehicleFormIcons/end-date.png"} alt="End Date" className="find-accommodation-form-icon"/>
                            </Grid>
                            <Grid item xs={11}>
                                <DatePicker
                                    label="End day of your travel"
                                    inputFormat="DD/MM/yyyy"
                                    value={checkOutTime}
                                    onChange={handleCheckOutTime}
                                    renderInput={(params) => <TextField {...params} sx={{m: 1, width: '99%'}}/>}
                                />
                            </Grid>
                        </Grid>
                    </LocalizationProvider>
                </div>
                <SearchButton>Search</SearchButton>
            </Box>
            <br/>

            //###################
            <h5>Filter Your Vehicle</h5>
            //The slider must come here
            <Box>
                //CODE HERE!!!!!
            </Box>
            <br/>

            <h5>Car Specs</h5>
            <FormGroup>
                {carspecs.map((item) => (
                    <FormControlLabel
                        control={<Checkbox sx={{'& .MuiSvgIcon-root': {fontSize: 18}}}/>} label={item}/>
                ))}
            </FormGroup>
            <Divider/>
            <br/>
            <h5>Transmission</h5>
            <FormGroup>
                {transmission1.map((item) => (
                    <FormControlLabel
                        control={<Checkbox sx={{'& .MuiSvgIcon-root': {fontSize: 18}}}/>} label={item}/>
                ))}
            </FormGroup>
            <Divider/>
            <br/>
            <h5>Transmission</h5>
            <FormGroup>
                {transmission2.map((item) => (
                    <FormControlLabel
                        control={<Checkbox sx={{'& .MuiSvgIcon-root': {fontSize: 18}}}/>} label={item}/>
                ))}
            </FormGroup>
            <Divider/>
            <br/>
    </div>
  )
}

export default VehicleForm    




