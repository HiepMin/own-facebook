import * as type from './constants';
const initialState = {};

export default (state=initialState, action) => {
    switch (action.type) {
        case type.CREATE_POST:
            return {...state};
        // case type.GET_POSTS:
            // return {...state, posts: action.posts};
        default: return {...state};
    }
}
