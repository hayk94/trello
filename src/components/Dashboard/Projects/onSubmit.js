import firebase from 'firebase'
import { db } from '../../../initFirebase'

import { SubmissionError } from 'redux-form'

import { browserHistory } from 'react-router'

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
      return docRef.id
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

export const onSubmitSuccess = (id, dispatch, props) => {
  console.log('onSubmitSuccess', id)
  props.onClose()
  browserHistory.push(`/project/${id}`)
}
