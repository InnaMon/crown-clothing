import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom'
import Spinner from '../../components/WithSpinner/Spinner';

const CollectionsOverview = lazy(() => import('../../components/CollectionsOverview/CollectionsOverview'));
const CollectionPage = lazy(() => import('../collection-page/CollectionPage'));

const ShopPage = ({ match }) => (
    <div className='shop-page'>
        <Suspense fallback={<Spinner />}>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </Suspense>
    </div>
)

export default ShopPage;