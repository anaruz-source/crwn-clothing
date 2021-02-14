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

// Initialize Firebase

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase