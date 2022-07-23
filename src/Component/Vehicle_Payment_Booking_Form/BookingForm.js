import React from 'react';
import "./BookingForm.css";
import { Form, FormGroup } from 'reactstrap';

const BookingForm = () => {
    const submitHandler = event => {
        event.PreventDefault()
    }
    return (
        <Form onSubmit={submitHandler}>
            <FormGroup className='booking_form d-inline-block me-4 mb-4'>
                <input type="text" placeholder='First Name' />
            </FormGroup>
            <FormGroup className='booking_form d-inline-block ms-1 mb-4'>
                <input type="text" placeholder='Last Name' />
            </FormGroup>
            <FormGroup className='booking_form d-inline-block me-4 mb-4'>
                <input type="email" placeholder='Email' />
            </FormGroup>
            <FormGroup className='booking_form d-inline-block ms-1 mb-4'>
                <input type="number" placeholder='Phone Number' />
            </FormGroup>
            <FormGroup className='booking_form d-inline-block me-4 mb-4'>
                <input type="text" placeholder='From Address' />
            </FormGroup>
            <FormGroup className='booking_form d-inline-block ms-1 mb-4'>
                <input type="text" placeholder='To Address' />
            </FormGroup>
            <FormGroup className='booking_form d-inline-block me-4 mb-4'>
                <select name="" id="">
                    <option value="1 person">1 Persion</option>
                    <option value="2 person">2 Persion</option>
                    <option value="3 person">3 Persion</option>
                    <option value="4 person">4 Persion</option>
                    <option value="5+ person">5+ Persion</option>
                </select>
            </FormGroup>
            <FormGroup className='booking_form d-inline-block ms-1 mb-4'>
                <select name="" id="">
                    <option value="1 Luggage">1 Luggage</option>
                    <option value="2 Luggage">2 Luggage</option>
                    <option value="3 Luggage">3 Luggage</option>
                    <option value="4 Luggage">4 Luggage</option>
                    <option value="5+ Luggage">5+ Luggage</option>
                </select>
            </FormGroup>
            <FormGroup className='booking_form d-inline-block me-4 mb-4'>
                <input type="date" placeholder='Journey Date' />
            </FormGroup>
            <FormGroup className='booking_form d-inline-block ms-1 mb-4'>
                <input type="time" placeholder='Journey Time' className='time_picker' />
            </FormGroup>
            <FormGroup >
                <textarea type='textarea' rows={5} className='textarea' placeholder='Write'></textarea>
            </FormGroup>
        </Form>
    );
};

export default BookingForm;
