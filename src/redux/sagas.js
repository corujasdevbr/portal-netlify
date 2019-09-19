import { all } from 'redux-saga/effects'
import authSagas from './auth/saga'
import projectSagas from './projects/saga'

export default function* rootSaga(getState) {
    yield all([authSagas(), projectSagas()])
}
