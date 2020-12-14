import firebase from 'firebase'
// import "firebase/auth"
// import "firebase/storage"

const config = {
  apiKey: "AIzaSyC7xZ89KwUENK7PuDNxpETFrxibjD2jqnY",
  authDomain: "revenue-computation-system.firebaseapp.com",
  projectId: "revenue-computation-system",
  storageBucket: "revenue-computation-system.appspot.com",
  messagingSenderId: "826229306158",
  appId: "1:826229306158:web:de45f38829f64d63df40bf"

};

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
// export const auth = firebase.auth()
export const db = firebase.database()
// export const storage = firebase.storage()
