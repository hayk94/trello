import { combineReducers } from 'redux'

import { reducer as formReducer } from 'redux-form'

import auth from './auth'
import projects from './projects'

const rootReducer = combineReducers({
  auth,
  projects,
  form: formReducer
})

export default rootReducer
