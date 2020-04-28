import React from 'react';
import { connect } from 'react-redux'

import { selectCollectionId } from '../../redux/shop/shop.selector';

import CollectionItem from '../../components/CheckoutItem/CheckoutItem';

import './CollectionPage.scss';

const CollectionPage = ({ collection }) => (
    <div className='collection-page'>
        <h2>COLLECTION PAGE</h2>
    </div>
)

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollectionId(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);