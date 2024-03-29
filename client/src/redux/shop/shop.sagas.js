import { takeEvery, call, put, all} from 'redux-saga/effects'

import   ShopActionTypes  from './shop.types'


import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

import  { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions'

export function*  fetchCollectionsStartAsync() {

    yield console.log('YOPII Fired!!!!')

    
    try {
      
      const collectionRef = firestore.collection('collection')

      const snapshot = yield collectionRef.get()

      const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
    
      yield put(fetchCollectionsSuccess(collectionsMap))

    } catch (error) {
      
      yield  put(fetchCollectionsFailure(error.message))
    }

}


export function* fetchCollectionsStart(){

  yield  takeEvery( ShopActionTypes.FETCH_COLLECTIONS_START,  fetchCollectionsStartAsync)
}

export function* shopSagas() {

  yield all([call(fetchCollectionsStart)])
}