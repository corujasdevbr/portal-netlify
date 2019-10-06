import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    LOGOUT_USER,
    SET_USER_DETAILS,
} from '../actions'

const INIT_STATE = {
    user: localStorage.getItem('userId'),
    loading: false,
    userDetails: localStorage.getItem('userDetails')
        ? localStorage.getItem('userDetails')
        : {},
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loading: true }
        case LOGIN_USER_SUCCESS:
            return { ...state, loading: false, user: action.payload }
        case REGISTER_USER:
            return { ...state, loading: true }
        case REGISTER_USER_SUCCESS:
            return { ...state, loading: false }
        case LOGOUT_USER:
            return { ...state, user: null }
        case SET_USER_DETAILS:
            return { ...state, userDetails: action.payload }
        default:
            return { ...state }
    }
}
