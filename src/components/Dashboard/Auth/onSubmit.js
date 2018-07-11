import firebase from 'firebase'
import { SubmissionError } from 'redux-form'

import { browserHistory } from 'react-router'

import { setAuth } from '../../../redux/actions/auth'

const firebaseErrorCodes = {
  EMAIL_IN_USE: 'auth/email-already-in-use',
  INVALID_EMAIL: 'auth/invalid-email',
  OPERATION_NOT_ALLOWED: 'auth/operation-not-allowed',
  WEAK_PASSWORD: 'auth/weak-password',
  USER_DISABLED: 'auth/user-disabled',
  USER_NOT_FOUND: 'auth/user-not-found',
  WRONG_PASSWORD: 'auth/wrong-password'
}

export const onSignUp = (values, dispatch, props) => {
  console.log('onSubmit', values)
  const { email, password } = values
  return firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(error => {
      const submissionErrors = {}

      if (error.code === firebaseErrorCodes.EMAIL_IN_USE) {
        submissionErrors.email = 'Email is already in use'
      }
      if (error.code === firebaseErrorCodes.INVALID_EMAIL) {
        submissionErrors.email = 'Email is not valid'
      }
      if (error.code === firebaseErrorCodes.OPERATION_NOT_ALLOWED) {
        submissionErrors._error = 'Operation is not allowed'
      }
      if (error.code === firebaseErrorCodes.WEAK_PASSWORD) {
        submissionErrors.password = 'Password is too weak'
      }

      throw new SubmissionError(submissionErrors)
    })
}
export const onSignIn = (values, dispatch, props) => {
  console.log('onSubmit', values)
  const { email, password } = values
  return firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(error => {
      const submissionErrors = {}

      if (error.code === firebaseErrorCodes.USER_DISABLED) {
        submissionErrors.email = 'User is disabled'
      }
      if (error.code === firebaseErrorCodes.INVALID_EMAIL) {
        submissionErrors.email = 'Email is not valid'
      }
      if (error.code === firebaseErrorCodes.USER_NOT_FOUND) {
        submissionErrors.email = 'There is no such user'
      }
      if (error.code === firebaseErrorCodes.WRONG_PASSWORD) {
        submissionErrors.password = 'Password is wrong'
      }

      throw new SubmissionError(submissionErrors)
    })
}

export const onSubmitSuccess = (result, dispatch, props) => {
  console.log('onSubmitSuccess', result)
  dispatch(setAuth(result.user))
  browserHistory.push('/')
}
