import {
    GET_ALLOTED_PROJECTS,
    UPDATE_ALLOTED_PROJECTS,
    GET_ACTIVE_PROJECTS,
    UPDATE_ACTIVE_PROJECTS,
} from '../actions'
export const getAllotedProjects = () => ({
    type: GET_ALLOTED_PROJECTS,
})
export const updateAllotedProjects = projects => ({
    type: UPDATE_ALLOTED_PROJECTS,
    payload: projects,
})
export const getActiveProjects = () => ({
    type: GET_ACTIVE_PROJECTS,
})
export const updateActiveProjects = projects => ({
    type: UPDATE_ACTIVE_PROJECTS,
    payload: projects,
})
