import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyCqK_ULa7hWzNkX4MvrYJkso68MrsXFrK4",
    authDomain: "posts-527b5.firebaseapp.com",
    databaseURL: "https://posts-527b5.firebaseio.com",
    projectId: "posts-527b5",
    storageBucket: "posts-527b5.appspot.com",
    messagingSenderId: "535309919299"
};
firebase.initializeApp(config);
export const dbFirestore = firebase.firestore();
dbFirestore.settings({ timestampsInSnapshots: true });
export default firebase;