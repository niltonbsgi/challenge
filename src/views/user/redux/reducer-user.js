export const url_request = {
    users: "https://jsonplaceholder.typicode.com/users",
    posts: "https://jsonplaceholder.typicode.com/posts",
    album: "https://jsonplaceholder.typicode.com/albums",
    photos: "https://jsonplaceholder.typicode.com/photos"
}
export const cases = {
    USER_LIST: 'USER_LIST',
    POST_LIST: 'POST_LIST',
    ALBUM_LIST: 'ALBUM_LIST',
    PHOTO_LIST: 'PHOTO_LIST',
    POST_POST: 'POST_POST',
    error: 'ERROR'
}

const INITIAL_STATE = {
    users: [],
    posts: [],
    albums: [],
    photos: [],
    success: false,
    errorMessage: '',
    error : false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case cases.USER_LIST:
            return {
                ...state,
                users: action.payload.data,
                success: true,
                errorMessage: '',
                error: false
            }
        case cases.POST_LIST:
            return {
                ...state,
                posts: action.payload.data,
                success: true,
                errorMessage: '',
                error: false
            }
        case cases.ALBUM_LIST:
            return {
                ...state,
                albums: action.payload.data,
                success: true,
                errorMessage: '',
                error: false
            }
        case cases.PHOTO_LIST:
            return {
                ...state,
                photos: action.payload.data,
                success: true,
                errorMessage: '',
                error: false
            }
        case cases.POST_POST:debugger
            return {
                ...state,
                success: true,
                errorMessage: '',
                error: false
            }
        case cases.error:debugger
            return {
                ...state,
                success: false,
                errorMessage: action.payload.message,
                error: true
            }
        default:
            return state
    }
};
