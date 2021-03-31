import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import  { selectIsFetchingCollections } from '../../redux/shop/shop.selectors'


import WithSpinner from '../with-spinner/with-spinner.component'
import CollectionOverview from './collections-overview.component'


const mapStateToProps = createStructuredSelector({

    isLoading: selectIsFetchingCollections
})


const CollectionsOverviewContainer = compose (
    connect (mapStateToProps),
    WithSpinner
    )(CollectionOverview)

export default CollectionsOverviewContainer