import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAicHw_8Ue0-RL8dZ8AfJesB9L7iNcdDic",
    authDomain: "crwn-db-c80de.firebaseapp.com",
    databaseURL: "https://crwn-db-c80de.firebaseio.com",
    projectId: "crwn-db-c80de",
    storageBucket: "",
    messagingSenderId: "750455432159",
    appId: "1:750455432159:web:c17890b5dcf1e94e"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
