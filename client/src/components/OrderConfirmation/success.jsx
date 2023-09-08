// success.jsx

import "./success.scss";
import React from 'react';

import { useNavigate } from "react-router-dom";


const Success = () => {
  const navigate = useNavigate();
  return (
    <div className="success-panel">
      <div className="layout">
        <div className="success-content">
          <span className='big-text'>Order Confirmed!</span>
          <span className='small-text'>Thank you for shopping with us.</span>
          <span className='details'>Now head onto your registered email address to get the necessary order details and be able to track your order.</span>
          <button onClick={() => {navigate('/')}}>Continue Shopping</button>
        </div>
      </div>
    </div>
  );
};

export default Success;
 