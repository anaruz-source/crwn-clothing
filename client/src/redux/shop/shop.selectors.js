import { createSelector } from 'reselect'


const selectShop = state => state.shop


export const selectShopCollections = createSelector(

    [selectShop],

     shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],

    collections => collections ? Object.keys(collections).map( k => collections [ k ]) : []
)

export const selectCollection = param => createSelector(

    [selectShopCollections],

    collections =>  collections ? collections[param] : null
)

export const selectIsFetchingCollections = createSelector(
    [selectShop],
    shop => shop.isFetching
)


export const selectIsCollectionsLoaded = createSelector( 

    [selectShop],

    shop => !!shop.collections
)