import rootReducer from './reducer';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import firebaseConfig from './firebase/config';
export default createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
        reactReduxFirebase(firebaseConfig, { useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true}),
        reduxFirestore(firebaseConfig),
    ),
)
