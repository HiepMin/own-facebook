import * as type from './constant';
import firebase from './../../firebase/config';
export const Act_Login = credentials => {
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(() => {
                dispatch({
                    type: type.LOGINSUCESSS,
                })
            })
            .catch(() => {
                dispatch({
                    type: type.LOGINERROR,
                })
            })
    }
}
