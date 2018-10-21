import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import post from './containers/PostPage/reducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import SignIn from './containers/SignInPage/reducer';
import SignUp from './containers/SignUpPage/reducer';
export default combineReducers({
    form: formReducer,
    post,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    SignIn,
    SignUp
})