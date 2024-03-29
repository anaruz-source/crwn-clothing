import React, { useEffect, lazy, Suspense } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import { fetchCollectionsStart } from '../../redux/shop/shop.actions'
import  Spinner  from "../../components/spinner/spinner.component";



const CollectionPageContainer = lazy(() => import('../collection/collection.container'))
const CollectionOverviewContainer = lazy(() => import('../../components/collections-overview/collections-overview.container') )

const   ShopPage = ({ fetchCollectionsStart, match}) => {
         


    useEffect(() => {

        

        fetchCollectionsStart()

    },[])


    

          return  ( <div className = 'shop-page' >

              <Suspense fallback = { <Spinner />}>
                <Route exact path={`${match.path}`}  component = { CollectionOverviewContainer}  /> 
                <Route path={`${match.path}/:collectionId`} component = { CollectionPageContainer } />
              </Suspense>
           </div> )


       
    }


const mapDispatchToProps = dispatch => ({
         
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})


export default connect(null, mapDispatchToProps)(ShopPage)