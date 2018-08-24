import { firebaseAuth, ref } from './firebase'

export function auth (email:string, pw:string) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then(saveUser)
}

export function logout () {
  return firebaseAuth().signOut()
}

export function login (email:string, pw:string) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
}

export function resetPassword (email:string) {
  return firebaseAuth().sendPasswordResetEmail(email)
}

export function saveUser (user:any) {
  return ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user)
}