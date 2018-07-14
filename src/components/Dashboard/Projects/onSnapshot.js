import { db } from '../../../initFirebase'

export default passDataToComponent => db.collection('projects')
  .onSnapshot(querySnapshot => {
    const projects = {}
    querySnapshot.forEach(doc => {
      console.log(doc.id, ' => ', doc.data())
      projects[doc.id] = doc.data()
    })
    passDataToComponent(projects)
  })
