import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyBGYCJYGn34_y-RSA_usMBq8IYghHJrP3M",
    authDomain: "crwn-bdd.firebaseapp.com",
    databaseURL: "https://crwn-bdd.firebaseio.com",
    projectId: "crwn-bdd",
    storageBucket: "crwn-bdd.appspot.com",
    messagingSenderId: "162448512064",
    appId: "1:162448512064:web:74f702cb6762278f5dbba5"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snap = await userRef.get()


    if(snap.exists) return userRef // do nothing if user exists, return userRef
    
    const {displayName, email} = userAuth

    const createAt = new Date()


    try {
        
        userRef.set({
            displayName,
            email,
            createAt,
            ...additionalData
        })
    } catch (error) {
        
        console.log('error creating user', error.message)
    }

    return userRef
}


export const addCollectionAndDocuments = async (collectionKey, docs) => {

    const collectionRef = firestore.collection(collectionKey)

    const batch = firestore.batch()

    docs.forEach( doc => {
      
        const docRef = collectionRef.doc()

        console.log(docRef)

        batch.set(docRef, doc)
        
    })

    return await batch.commit()
}

export const convertCollectionsSnapshotToMap = collections => {


   
    const transformedCollection = collections.docs.map( doc => {
        
        const { title, items } = doc.data()

        return { 
            
            id: doc.id,
            routeName : encodeURI(title.toLowerCase()),
            title,
            items
        }
    })

return transformedCollection.reduce((acc, collection) => {
    
    acc [collection.title.toLowerCase()] = collection

    return acc
}, { })
}

export const getCurrentUser = () => {

    return new Promise((resolve, reject) => {

           const unsubscribe = auth.onAuthStateChanged(userAuth => {

               unsubscribe()
               resolve(userAuth)
           }, reject)
    })
}

// Initialize Firebase

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export default firebase