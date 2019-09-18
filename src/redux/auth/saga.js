import {
    all,
    call,
    fork,
    put,
    takeEvery,
    actionChannel
} from 'redux-saga/effects'
import { Auth } from 'aws-amplify'
import { LOGIN_USER, REGISTER_USER, LOGOUT_USER } from '../actions'

import { loginUserSuccess, registerUserSuccess } from './actions'

const loginWithEmailPasswordAsync = async (email, password) => {
    try {
        const { signInUserSession } = await Auth.signIn(email, password)
        return signInUserSession
    } catch (error) {
        return { error: error }
    }
}

function* loginWithEmailPassword({ payload }) {
    const { email, password } = payload.user
    const { history } = payload
    try {
        const loginUser = yield call(
            loginWithEmailPasswordAsync,
            email,
            password
        )
        if (!loginUser.error) {
            localStorage.setItem(
                'userId',
                loginUser.idToken.payload['custom:userId']
            )
            yield put(loginUserSuccess(loginUser))
            const access =
                loginUser.idToken.payload['custom:stage'] === '0' ? false : true
            if (!access) {
                history.push('/')
            } else {
                history.push('/')
            }
        } else {
            console.log('login failed :', loginUser.message)
        }
    } catch (error) {
        console.log('login error : ', error)
    }
}

const registerWithEmailPasswordAsync = async (email, confirmationCode) => {
    try {
        const authUser = await Auth.confirmSignUp(email, confirmationCode)
        return authUser
    } catch (error) {
        return { error: error }
    }
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
            console.log('starting...')
            yield put(registerUserSuccess(registerUser))
            console.log('ending...')
            loginWithEmailPassword(payload)
        } else {
            console.log('register failed :', registerUser.message)
        }
    } catch (error) {
        console.log('register error : ', error)
    }
}

const logoutAsync = async history => {
    await Auth.signOut()
        .then(authUser => authUser)
        .catch(err => err)
    history.push('/')
}

function* logout({ payload }) {
    const { history } = payload
    try {
        yield call(logoutAsync, history)
        localStorage.removeItem('userId')
    } catch (error) {}
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

export default function* rootSaga() {
    yield all([
        fork(watchLoginUser),
        fork(watchLogoutUser),
        fork(watchRegisterUser)
    ])
}
