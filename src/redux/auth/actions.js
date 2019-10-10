import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER,
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    GET_USER_DETAILS,
    SET_USER_DETAILS,
    DELETE_USER,
} from '../actions'

export const loginUser = (user, history) => ({
    type: LOGIN_USER,
    payload: { user, history },
})
export const loginUserSuccess = user => ({
    type: LOGIN_USER_SUCCESS,
    payload: user,
})

export const registerUser = (user, history) => ({
    type: REGISTER_USER,
    payload: { user, history },
})
export const registerUserSuccess = () => ({
    type: REGISTER_USER_SUCCESS,
})

export const logoutUser = history => ({
    type: LOGOUT_USER,
    payload: { history },
})

export const getUserDetails = () => ({
    type: GET_USER_DETAILS,
})

export const setUserDetails = userDetails => ({
    type: SET_USER_DETAILS,
    payload: userDetails,
})

export const deleteUser = history => ({
    type: DELETE_USER,
    payload: history,
})
