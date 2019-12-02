const INITIAL_STATE = {
    users: [],
    success: false,
    errorMessage: '',
    error : false
}

export const url_request = {
    users: "https://jsonplaceholder.typicode.com/users"
}
export const cases = {
    user_list: 'USER_LIST',
    error: 'ERROR'
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        
        case cases.user_list: 
            return {
                ...state,
                users: action.payload.data,
                success: true,
                errorMessage: '',
                error: false 
            } 
        case cases.error:
            return {
                ...state,
                success: false,
                errorMessage: '',
                error: true 
            }
        default:
            return state
    }
};