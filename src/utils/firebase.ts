import * as firebase from 'firebase'

const config = {
  apiKey: "TODO",
  authDomain: "TODO.firebaseapp.com",
  databaseURL: "TODO.firebaseio.com",
  storageBucket: "TODO.appspot.com"

}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth