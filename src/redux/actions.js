/* SETTINGS */
export const CHANGE_LOCALE = 'CHANGE_LOCALE'

/* AUTH */
export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const REGISTER_USER = 'REGISTER_USER'
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
export const LOGOUT_USER = 'LOGOUT_USER'
export const GET_USER_DETAILS = 'GET_USER_DETAILS'
export const SET_USER_DETAILS = 'SET_USER_DETAILS'
export const DELETE_USER = 'DELETE_USER'

/* MENU */
export const MENU_SET_CLASSNAMES = 'MENU_SET_CLASSNAMES'
export const MENU_CONTAINER_ADD_CLASSNAME = 'MENU_CONTAINER_ADD_CLASSNAME'
export const MENU_CLICK_MOBILE_MENU = 'MENU_CLICK_MOBILE_MENU'
export const MENU_CHANGE_DEFAULT_CLASSES = 'MENU_CHANGE_DEFAULT_CLASSES'
export const MENU_CHANGE_HAS_SUB_ITEM_STATUS = 'MENU_CHANGE_HAS_SUB_ITEM_STATUS'

/* PROJECTS */
export const GET_ALLOTTED_PROJECTS = 'GET_ALLOTTED_PROJECTS'
export const UPDATE_ALLOTTED_PROJECTS = 'UPDATE_ALLOTTED_PROJECTS'
export const GET_ACTIVE_PROJECTS = 'GET_ACTIVE_PROJECTS'
export const UPDATE_ACTIVE_PROJECTS = 'UPDATE_ACTIVE_PROJECTS'
export const UPDATE_TOP_RIGHT_PANEL_PROJECT = 'UPDATE_TOP_RIGHT_PANEL_PROJECT'
export const UPDATE_BOTTOM_RIGHT_PANEL_PROJECT =
    'UPDATE_BOTTOM_RIGHT_PANEL_PROJECT'
export const UPDATE_TOP_RIGHT_PANEL_PROJECT_MYPROJECTS =
    'UPDATE_TOP_RIGHT_PANEL_PROJECT_MYPROJECTS'

export * from './menu/actions'
export * from './settings/actions'
export * from './auth/actions'
export * from './projects/actions'
