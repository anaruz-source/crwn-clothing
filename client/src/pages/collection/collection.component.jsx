import React from 'react'
import { connect } from 'react-redux'

import CollectionItem from '../../components/collection-item/collection-item.component'
import { CollectionPageContainer, CollectionItemsContainer, CollectionTitle } from './collection.styles'

import {selectCollection } from '../../redux/shop/shop.selectors'



const CollectionPage = ({ collection }) => {
    
    const {title, items} = collection
    
    return (

    <CollectionPageContainer>
       
       <CollectionTitle>{ title.toUpperCase() }</CollectionTitle>
        <CollectionItemsContainer>
            { items.map( item => (

                <CollectionItem key = {item.id} item = {item} />
            ))}
        </CollectionItemsContainer>
    </CollectionPageContainer>
)}


const mapStateToProps = (state, ownProps) => ({

    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)