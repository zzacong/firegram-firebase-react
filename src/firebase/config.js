import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// FIREBASE WEB APP CONFIG
const firebaseConfig = {
  apiKey: 'AIzaSyDa82tQgKhUHGYaDRTcFL1ZYpvKuOmmp2g',
  authDomain: 'firegram-15a80.firebaseapp.com',
  databaseURL: 'https://firegram-15a80.firebaseio.com',
  projectId: 'firegram-15a80',
  storageBucket: 'firegram-15a80.appspot.com',
  messagingSenderId: '774972276983',
  appId: '1:774972276983:web:ffba3f89cda65be59c13f2',
}

// INITIALIZE FIREBASE
firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectFirestore, timestamp }
