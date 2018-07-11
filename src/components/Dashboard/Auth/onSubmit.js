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
  WRONG_PASSWORD: 'auth/wrong-password',
  NO_CONTINUE_URI: 'auth/missing-continue-uri',
  INVALID_CONTINUE_URI: 'auth/invalid-continue-uri',
  UNAUTH_CONTINUE_URI: 'auth/unauthorized-continue-uri'
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
export const onForgotPassword = (values, dispatch, props) => {
  console.log('onSubmit', values)
  const { email } = values
  return firebase.auth().sendPasswordResetEmail(email)
    .catch(error => {
      const submissionErrors = {}

      if (error.code === firebaseErrorCodes.INVALID_EMAIL) {
        submissionErrors.email = 'Email is not valid'
      }
      if (error.code === firebaseErrorCodes.USER_NOT_FOUND) {
        submissionErrors.email = 'There is no such user'
      }
      if (error.code === firebaseErrorCodes.NO_CONTINUE_URI) {
        submissionErrors.email = 'A continue URL must be provided in the request.'
      }
      if (error.code === firebaseErrorCodes.INVALID_CONTINUE_URI) {
        submissionErrors.email = 'The continue URL provided in the request is invalid.'
      }
      if (error.code === firebaseErrorCodes.UNAUTH_CONTINUE_URI) {
        submissionErrors.email = 'The domain of the continue URL is not whitelisted. Whitelist the domain in the Firebase console.'
      }

      throw new SubmissionError(submissionErrors)
    })
}

export const onSubmitSuccess = (result, dispatch, props) => {
  console.log('onSubmitSuccess', result)
  dispatch(setAuth(result.user))
  browserHistory.push('/')
}

export const onForgotPasswordSuccess = (result, dispatch, props) => {
  browserHistory.push('/auth/forgot-password-success')
}
