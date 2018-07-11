import firebase from 'firebase'
import { SubmissionError } from 'redux-form'

const firebaseErrorCodes = {
  EMAIL_IN_USE: 'auth/email-already-in-use',
  INVALID_EMAIL: 'auth/invalid-email',
  OPERATION_NOT_ALLOWED: 'auth/operation-not-allowed',
  WEAK_PASSWORD: 'auth/weak-password'
}

export const signUpCallbacks = {
  onSubmit (values, dispatch, props) {
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
}
