import React from 'react'
import './Register.css'
import car from '../../Assets/Cars/Large.jpg';

const Register = () => {
  const style1 = { color: "black" };
  const style2 = { textalign: "inherit" };
  return (
    <div className='register'>
      <div className='container'>
        <div className='left'>
          <h2 style={{ ...style1, ...style2 }}>Members access great rates and savings</h2>
          <p>Sign up for access to personalized reccomendations and private deals</p>
          <div className='input-container'>
            <input type='email' placeholder='Enter your email' />
            <button className='btn myButton' >Take me there!</button>
          </div>
        </div>
        <div className='right'>
          <div className='img-container'>
            <img className='myCarRegister' src={car} alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Register