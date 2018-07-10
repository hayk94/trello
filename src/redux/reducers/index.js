import { combineReducers } from 'redux'

import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  test: () => 'test',
  form: formReducer
})

export default rootReducer
