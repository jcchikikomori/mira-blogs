/**
 * Firebase setup for NodeJS
 */
import * as firebase from 'firebase'
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true}
const config = {
  apiKey: 'AIzaSyAcJEn6GSGJAuKtyDJn1Q4v5vND2dVVjcM',
  authDomain: 'mira-blogs.firebaseapp.com',
  databaseURL: 'https://mira-blogs.firebaseio.com',
  projectId: 'mira-blogs',
  storageBucket: 'mira-blogs.appspot.com',
  messagingSenderId: '239973081254'
};
firebase.initializeApp(config)
firebase.firestore().settings(settings)
export default firebase
