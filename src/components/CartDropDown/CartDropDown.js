import React from 'react';

import CusttomButton from '../CustomButton/CustomButton';

import './CartDropDown.scss';

const CartDropDown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'></div>
        <CusttomButton>GO TO CHECKOUT</CusttomButton>
    </div>
)

export default CartDropDown;