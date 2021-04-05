import React from 'react'

import CollectionItem from '../../components/collection-item/collection-item.component'
import { CollectionPageContainer, CollectionItemsContainer, CollectionTitle } from './collection.styles'



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


export default CollectionPage