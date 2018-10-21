import * as type from './constants';
import { dbFirestore } from './../../firebase/config';
export const Act_CreatePosts = post => {
    return (dispatch, getState) => {
        //------
        // async action here
        const profile = getState().firebase.profile;
        const id = getState().firebase.auth.uid;
        dbFirestore.collection('posts').add({
            ...post,
            AuthorName: profile.username,
            Like: 0,
            createAt: new Date(),
            id: id,
        }).then(() => {
            // request done will dispatch action
            dispatch({
                type: type.CREATE_POST,
                post
            })
        }).catch(err => console.log(err));
    }
}