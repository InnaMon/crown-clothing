import React from 'react';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import CartItem from '../CartItem/CartItem';
import CusttomButton from '../CustomButton/CustomButton';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './CartDropDown.scss';

const CartDropDown = ( { cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ? (
                cartItems.map(cartItem => 
                    <CartItem key={cartItem.id} item={cartItem}/>
                )) : (<span className='empty-message'>Cart is empty</span>)
            }
        </div>
        <CusttomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>GO TO CHECKOUT</CusttomButton>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropDown));