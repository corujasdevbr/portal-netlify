import {
    GET_ALLOTTED_PROJECTS,
    GET_ACTIVE_PROJECTS,
    UPDATE_ACTIVE_PROJECTS,
    UPDATE_ALLOTTED_PROJECTS,
    UPDATE_TOP_RIGHT_PANEL_PROJECT,
    UPDATE_BOTTOM_RIGHT_PANEL_PROJECT,
    UPDATE_TOP_RIGHT_PANEL_PROJECT_MYPROJECTS,
} from '../actions'

const INIT_STATE = {
    activeProjects: [],
    allottedProjects: [],
    topRightPanelProject: [],
    bottomRightPanelProject: [],
    topRightPanelProjectMyProjects: [],
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_ALLOTTED_PROJECTS:
            return { ...state }
        case UPDATE_ALLOTTED_PROJECTS:
            return { ...state, allottedProjects: action.payload }
        case GET_ACTIVE_PROJECTS:
            return { ...state }
        case UPDATE_ACTIVE_PROJECTS:
            return { ...state, activeProjects: action.payload }
        case UPDATE_TOP_RIGHT_PANEL_PROJECT:
            return { ...state, topRightPanelProject: [action.payload] }
        case UPDATE_BOTTOM_RIGHT_PANEL_PROJECT:
            return { ...state, bottomRightPanelProject: [action.payload] }
        case UPDATE_TOP_RIGHT_PANEL_PROJECT_MYPROJECTS:
            return {
                ...state,
                topRightPanelProjectMyProjects: [action.payload],
            }
        default:
            return { ...state }
    }
}
