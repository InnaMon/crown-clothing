import SHOP_DATA from '../../pages/shop-page/ShopData';

const INITIAL_STATE = {
    collections: SHOP_DATA
}

  const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.stype) {
        default :
            return state;
    }
}

export default shopReducer;