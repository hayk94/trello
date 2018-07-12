import { ON_AUTH_SUCCESS } from './types'

export const setAuth = user => ({ type: ON_AUTH_SUCCESS, payload: user })
