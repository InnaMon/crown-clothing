import React, { Component } from 'react';

import SHOP_DATA from './ShopData';

class ShopPage extends Component {
    state = {
        collections: SHOP_DATA
    }
    render() {
        return (
            <div>SHOP PAGE</div>
        );
    }
}

export default ShopPage;