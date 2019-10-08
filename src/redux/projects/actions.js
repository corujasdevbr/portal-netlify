import {
    GET_ALLOTTED_PROJECTS,
    UPDATE_ALLOTTED_PROJECTS,
    GET_ACTIVE_PROJECTS,
    UPDATE_ACTIVE_PROJECTS,
    UPDATE_TOP_RIGHT_PANEL_PROJECT,
    UPDATE_BOTTOM_RIGHT_PANEL_PROJECT,
    UPDATE_TOP_RIGHT_PANEL_PROJECT_MYPROJECTS,
} from '../actions'
export const getAllottedProjects = () => ({
    type: GET_ALLOTTED_PROJECTS,
})
export const updateAllottedProjects = projects => ({
    type: UPDATE_ALLOTTED_PROJECTS,
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
