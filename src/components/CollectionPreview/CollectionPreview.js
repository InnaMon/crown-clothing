import React from 'react';

import CollectionItem from '../CollectionItem/CollectionItem';

import './CollectionPreview.scss';

//on every render where CollcetionPreview is used
//this comp will be rerendered and the function with modification
//will be rerednered every time = performance issue :-( )
const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title}</h1>
        <div className='preview'>
            {
                items
                .filter((item, idx) => idx < 4)
                .map(item => (
                <CollectionItem key={item.id} item={item} />
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;