import { db } from '../../../initFirebase'

import {
  ON_PROJECTS_FETCHED
} from './types'

export const fetchProjects = () => (dispatch, getState) => {
  const projects = {}
  // db.collection('projects').get().then(querySnapshot => {
  //   querySnapshot.forEach(doc => {
  //     // doc.data() is never undefined for query doc snapshots
  //     console.log(doc.id, ' => ', doc.data())
  //     projects[doc.id] = doc.data()
  //   })
  //   dispatch({ type: ON_PROJECTS_FETCHED, payload: projects })
  // })
  db.collection('projects')
    .onSnapshot(querySnapshot => {
      querySnapshot.forEach(doc => {
        console.log(doc.id, ' => ', doc.data())
        projects[doc.id] = doc.data()
      })
      dispatch({ type: ON_PROJECTS_FETCHED, payload: projects })
    })
}
