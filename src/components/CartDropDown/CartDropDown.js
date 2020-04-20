import React from 'react';
import { connect } from 'react-redux';

import CartItem from '../CartItem/CartItem';
import CusttomButton from '../CustomButton/CustomButton';

import './CartDropDown.scss';

const CartDropDown = ( { cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => 
                    <CartItem key={cartItem.id} item={cartItem}/>
                )
            }
        </div>
        <CusttomButton>GO TO CHECKOUT</CusttomButton>
    </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

export default connect(mapStateToProps)(CartDropDown);