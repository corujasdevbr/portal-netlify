import { all, call, put, fork, takeEvery } from 'redux-saga/effects'
import { API } from 'aws-amplify'
import { GET_ALLOTED_PROJECTS, GET_ACTIVE_PROJECTS } from '../actions'

import { updateActiveProjects, updateAllotedProjects } from './actions'

const getProjectsAsync = async (lr, ur) => {
    const id = localStorage.getItem('userId')
    return API.get('portal-api', `/projects/${id}`, {
        queryStringParameters: {
            ur: lr,
            lr: ur,
        },
    })
}

function* fetchAllotedProjects() {
    const lr = 1
    const ur = 1
    try {
        const projects = yield call(getProjectsAsync, lr, ur)
        yield put(updateAllotedProjects(projects['Responses']['item-table']))
    } catch (error) {
        console.log({ error: error.response })
    }
}

function* fetchActiveProjects() {
    const lr = 2
    const ur = 2
    try {
        const projects = yield call(getProjectsAsync, lr, ur)
        yield put(updateActiveProjects(projects['Responses']['item-table']))
    } catch (error) {
        console.log({ error: error.response })
    }
}

export function* watchGetActiveProjects() {
    yield takeEvery(GET_ACTIVE_PROJECTS, fetchActiveProjects)
}

export function* watchGetAllotedProjects() {
    yield takeEvery(GET_ALLOTED_PROJECTS, fetchAllotedProjects)
}

export default function* rootSaga() {
    yield all([fork(watchGetActiveProjects), fork(watchGetAllotedProjects)])
}
