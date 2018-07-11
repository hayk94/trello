import { ON_AUTH_SUCCESS } from './types'

export const setAuth = auth => ({ type: ON_AUTH_SUCCESS, payload: auth })
