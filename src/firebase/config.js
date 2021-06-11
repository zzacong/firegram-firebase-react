import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// FIREBASE WEB APP CONFIG
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'firegram-15a80.firebaseapp.com',
  databaseURL: 'https://firegram-15a80.firebaseio.com',
  projectId: 'firegram-15a80',
  storageBucket: 'firegram-15a80.appspot.com',
  messagingSenderId: '774972276983',
  appId: process.env.REACT_APP_APP_ID,
}

// INITIALIZE FIREBASE
firebase.initializeApp(firebaseConfig)

export const storage = firebase.storage()
export const firestore = firebase.firestore()
export const timestamp = firebase.firestore.FieldValue.serverTimestamp
