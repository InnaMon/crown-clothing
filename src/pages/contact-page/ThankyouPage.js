import React from 'react';
import { Link } from 'react-router-dom'

const ThankyouPage = () => {
    return (
        <div>
            <div style={{textAlign: 'center'}}>
                <h1>Thank You for Subscribing!</h1>
                <Link to="/shop">Continue Shopping</Link>
            </div>
        </div>
    )
}

export default ThankyouPage;