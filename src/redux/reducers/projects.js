import { ON_PROJECTS_FETCHED } from '../actions/projects/types'

export default (state = null, action) => {
  switch (action.type) {
    case ON_PROJECTS_FETCHED:
      return action.payload
    default:
      return state
  }
}
