import { all, call, put, fork, takeEvery } from 'redux-saga/effects'
import { API } from 'aws-amplify'
import { GET_ALLOTTED_PROJECTS, GET_ACTIVE_PROJECTS } from '../actions'

import { updateActiveProjects, updateAllottedProjects } from './actions'

const getProjectsAsync = async (lr, ur) => {
    const id = localStorage.getItem('userId')
    return API.get('portal-api', `/projects/${id}`, {
        queryStringParameters: {
            ur: lr,
            lr: ur,
        },
    })
}

function* fetchAllottedProjects() {
    const lr = 1
    const ur = 1
    try {
        const projects = yield call(getProjectsAsync, lr, ur)
        yield put(updateAllottedProjects(projects['Responses']['item-table']))
    } catch (error) {
        console.log({ error: error.response })
    }
}

function* fetchActiveProjects() {
    const userGroup = localStorage.getItem('userGroup')
    let lr = 0
    let ur = 0
    if (userGroup === 'editor') {
        lr = 4
        ur = 4
    } else if (userGroup === 'writer') {
        lr = 2
        ur = 2
    }

    try {
        const projects = yield call(getProjectsAsync, lr, ur)
        yield put(updateActiveProjects(projects['Responses']['item-table']))
    } catch (error) {
        if (
            error.response.data.error.message ===
            "1 validation error detected: Value '[]' at 'requestItems.item-table.member.keys' failed to satisfy constraint: Member must have length greater than or equal to 1"
        ) {
            yield put(updateActiveProjects([]))
        }
        console.log({ error: error.response })
    }
}

export function* watchGetActiveProjects() {
    yield takeEvery(GET_ACTIVE_PROJECTS, fetchActiveProjects)
}

export function* watchGetAllottedProjects() {
    yield takeEvery(GET_ALLOTTED_PROJECTS, fetchAllottedProjects)
}

export default function* rootSaga() {
    yield all([fork(watchGetActiveProjects), fork(watchGetAllottedProjects)])
}
