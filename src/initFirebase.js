import firebase from 'firebase'
import store from './redux'
import { setAuth } from './redux/actions/auth'

export default () => {
  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyC1H97dDoIVurLdgHOGgfRRubrTmb3YkTo',
    authDomain: 'tree-of-life-ee870.firebaseapp.com',
    databaseURL: 'https://tree-of-life-ee870.firebaseio.com',
    projectId: 'tree-of-life-ee870',
    storageBucket: 'tree-of-life-ee870.appspot.com',
    messagingSenderId: '861153906067'
  }
  firebase.initializeApp(config)

  firebase.auth().onAuthStateChanged(user => {
    store.dispatch(setAuth(user))
  })
}
