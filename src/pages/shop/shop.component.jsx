import React from 'react'

import '../../components/collection-preview/collection-preview.component'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import SHOP_DATA from './shop.data'

class ShopPage extends React.Component {

    constructor(props){

        super(props)

        this.state = SHOP_DATA
    }

    render() {

        const collections = this.state

        return (<div>

            { collections.map( ({id, ...otherProps}) => (

                <CollectionPreview key= {id} {...otherProps } />
            ))}
        </div>)
    }
}

export default ShopPage