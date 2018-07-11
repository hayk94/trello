import { ON_AUTH_SUCCESS } from '../actions/auth/types'

export default (state = null, action) => {
  switch (action.type) {
    case ON_AUTH_SUCCESS:
      return action.payload
    default:
      return state
  }
}
