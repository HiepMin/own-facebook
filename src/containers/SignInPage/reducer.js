import * as type from './constant';
const initialState = {
    isSignIn: null,
};
export default (state=initialState, action) => {
    switch (action.type) {
        case (type.LOGINSUCESSS):
            return {...state};
        case (type.LOGINERROR):
            return {...state};
        default: return state;
    }
}