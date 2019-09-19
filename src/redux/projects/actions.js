import {
    GET_ALLOTED_PROJECTS,
    UPDATE_ALLOTED_PROJECTS,
    GET_ACTIVE_PROJECTS,
    UPDATE_ACTIVE_PROJECTS,
    UPDATE_TOP_RIGHT_PANEL_PROJECT,
    UPDATE_BOTTOM_RIGHT_PANEL_PROJECT,
    UPDATE_TOP_RIGHT_PANEL_PROJECT_MYPROJECTS,
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

export const updateTopRightPanelProject = project => ({
    type: UPDATE_TOP_RIGHT_PANEL_PROJECT,
    payload: project,
})

export const updateBottomRightPanelProject = project => ({
    type: UPDATE_BOTTOM_RIGHT_PANEL_PROJECT,
    payload: project,
})

export const updateTopRightPanelProjectMyProjects = project => ({
    type: UPDATE_TOP_RIGHT_PANEL_PROJECT_MYPROJECTS,
    payload: project,
})
