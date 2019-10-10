import { all, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { Auth, API } from 'aws-amplify'
import {
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER,
    GET_USER_DETAILS,
    DELETE_USER,
} from '../actions'

import {
    loginUser,
    logoutUser,
    loginUserSuccess,
    registerUserSuccess,
    setUserDetails,
} from './actions'
import { resolve } from 'path'

const loginWithEmailPasswordAsync = (email, password) => {
    return Auth.signIn(email, password)
}

const getUserDetails = async (id, role) => {
    return API.get('portal-api', `/users/${id}`, {
        queryStringParameters: {
            role: role,
        },
    })
}

function* fetchUserDetails() {
    const userId = localStorage.getItem('userId')
    const userGroup = localStorage.getItem('userGroup')
    try {
        const userDetails = yield call(getUserDetails, userId, userGroup)
        yield put(setUserDetails(userDetails))
    } catch (error) {
        // TODO log out the user on error
        console.log({ error: error.response })
    }
}

function* loginWithEmailPassword({ payload }) {
    const { email, password } = payload.user
    const { history } = payload
    try {
        const { signInUserSession } = yield call(
            loginWithEmailPasswordAsync,
            email,
            password
        )
        console.log(
            'TCL: function*loginWithEmailPassword -> signInUserSession',
            signInUserSession
        )
        const userId = signInUserSession.idToken.payload['custom:userId']
        const userGroup = signInUserSession.idToken.payload['custom:group']
        localStorage.setItem('userId', userId)
        localStorage.setItem('userGroup', userGroup)
        yield put(
            loginUserSuccess(signInUserSession.idToken.payload['custom:userId'])
        )
        const access =
            signInUserSession.idToken.payload['custom:stage'] === '0'
                ? false
                : true
        if (!access) {
            history.push('/')
        } else {
            history.push('/')
        }
    } catch (error) {
        console.log({ 'login error': error })
    }
}

const registerWithEmailPasswordAsync = async (email, confirmationCode) => {
    return Auth.confirmSignUp(email, confirmationCode)
}

function* registerWithEmailPassword({ payload }) {
    const { email, confirmationCode } = payload.user
    try {
        const registerUser = yield call(
            registerWithEmailPasswordAsync,
            email,
            confirmationCode
        )
        if (!registerUser.error) {
            yield put(registerUserSuccess())
            yield put(loginUser(payload.user, payload.history))
        } else {
            console.log('register failed :', registerUser.message)
        }
    } catch (error) {
        console.log('register error : ', error)
    }
}

const logoutAsync = async () => {
    return Auth.signOut()
}

function* logout({ payload }) {
    const { history } = payload
    try {
        yield call(logoutAsync, history)
        history.push('/')
        localStorage.removeItem('userId')
        localStorage.removeItem('userGroup')
    } catch (error) {
        console.log('register error : ', error)
    }
}

const deleteUserRequest = user => {
    return new Promise((resolve, reject) => {
        user.deleteUser(error => {
            if (error) {
                return reject(error)
            }
            resolve()
        })
    })
}

function* deleteUser({ payload }) {
    try {
        const user = yield Auth.currentAuthenticatedUser()
        yield call(deleteUserRequest, user)
        alert('Successfully deleted user')
        yield put(logoutUser(payload))
    } catch (error) {
        console.log({ error: error })
    }
}

export function* watchRegisterUser() {
    yield takeEvery(REGISTER_USER, registerWithEmailPassword)
}

export function* watchLoginUser() {
    yield takeEvery(LOGIN_USER, loginWithEmailPassword)
}

export function* watchLogoutUser() {
    yield takeEvery(LOGOUT_USER, logout)
}
export function* watchUserDetails() {
    yield takeLatest(GET_USER_DETAILS, fetchUserDetails)
}

export function* watchDeleteUser() {
    yield takeLatest(DELETE_USER, deleteUser)
}

export default function* rootSaga() {
    yield all([
        fork(watchLoginUser),
        fork(watchLogoutUser),
        fork(watchRegisterUser),
        fork(watchUserDetails),
        fork(watchDeleteUser),
    ])
}
