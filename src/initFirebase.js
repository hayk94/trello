import firebase from 'firebase'
import store from './redux'
import { setAuth } from './redux/actions/auth'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyC1H97dDoIVurLdgHOGgfRRubrTmb3YkTo',
  authDomain: 'tree-of-life-ee870.firebaseapp.com',
  databaseURL: 'https://tree-of-life-ee870.firebaseio.com',
  projectId: 'tree-of-life-ee870',
  storageBucket: 'tree-of-life-ee870.appspot.com',
  messagingSenderId: '861153906067',
  timestampsInSnapshots: true /* check comments for this one. */
}
firebase.initializeApp(config)

firebase.auth().onAuthStateChanged(user => {
  store.dispatch(setAuth(user))
})

export const db = firebase.firestore()
export const storage = firebase.storage()

// timestampsInSnapshots: true
// [2018-07-14T16:35:12.616Z]  @firebase/firestore: Firestore (5.0.4):
// The behavior for Date objects stored in Firestore is going to change
// AND YOUR APP MAY BREAK.
// To hide this warning and ensure your app does not break, you need to add the
// following code to your app before calling any other Cloud Firestore methods:
//
//   const firestore = firebase.firestore();
//   const settings = {/* your settings... */ timestampsInSnapshots: true};
//   firestore.settings(settings);
//
// With this change, timestamps stored in Cloud Firestore will be read back as
// Firebase Timestamp objects instead of as system Date objects. So you will also
// need to update code expecting a Date to instead expect a Timestamp. For example:
//
//   // Old:
//   const date = snapshot.get('created_at');
//   // New:
//   const timestamp = snapshot.get('created_at');
//   const date = timestamp.toDate();
//
// Please audit all existing usages of Date when you enable the new behavior. In a
// future release, the behavior will change to the new behavior, so if you do not
// follow these steps, YOUR APP MAY BREAK.
