export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1 }];
}

export const clearItemFromCart = (cartItems, cartItemToRemove) => {
    return cartItems.filter(cartItem => 
            cartItem.id !== cartItemToRemove.id)
}

export const removeItem = (cartItems, cartItemToDecrement) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToDecrement.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => 
            cartItem.id !== existingCartItem.id) }
    else {
        return cartItems.map(cartItem => 
            cartItem.id === existingCartItem.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
    }
}