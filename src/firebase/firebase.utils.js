import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBAD9Hu16M8IFMMOKUM1-YnHB8nSe_RXRg",
    authDomain: "crwn-db-2831c.firebaseapp.com",
    projectId: "crwn-db-2831c",
    storageBucket: "crwn-db-2831c.appspot.com",
    messagingSenderId: "597716753522",
    appId: "1:597716753522:web:9e6fb1307acafeadabf6eb",
    measurementId: "G-P8H1WEKQ65"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;