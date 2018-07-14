import firebase from 'firebase'
import { SubmissionError } from 'redux-form'

import { browserHistory } from 'react-router'

const db = firebase.firestore()

const onSubmit = (values, dispatch, props) => {
  console.log('onSubmit', values)
  console.log('props', props)
  const submissionErrors = {}

  const user = firebase.auth().currentUser

  if (!user) {
    submissionErrors._error = 'Please sign in to add a new project'
    throw new SubmissionError(submissionErrors)
  }

  const { name } = values

  return db.collection('projects').add({
    name
  })
    .then(docRef => {
      console.log('Document written with ID: ', docRef.id)
      // props.onClose()
      // browserHistory.push(`/project/${docRef.id}`)
    })
    .catch(error => {
      console.error('Error adding document: ', error)
      submissionErrors._error = error.message
      throw new SubmissionError(submissionErrors)
    })
}

export default onSubmit

export const onSubmitSuccess = (result, dispatch, props) => {
  console.log('onSubmitSuccess', result)
  // props.onClose()
  // browserHistory.push(`/project/${docRef.id}`)
}
