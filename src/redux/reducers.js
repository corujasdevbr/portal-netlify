import { combineReducers } from 'redux'
import settings from './settings/reducer'
import menu from './menu/reducer'
import authUser from './auth/reducer'
import projects from './projects/reducer'

const reducers = combineReducers({
    menu,
    settings,
    projects,
    authUser,
})

export default reducers
