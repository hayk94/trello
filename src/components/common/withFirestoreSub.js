import React from 'react'

/**
 * withFirestoreSub - subscribe to firestore data with onSnapshot
 *
 * @param  {Component} WrappedComponent  Component which needs the data
 * @param  {function} getData           a function which gets data and sends it to component by its argument - passDataToComponent
 * @param  {String} propName = 'data' the data will be passed as prop by this name
 * @return {Component}                   final component with the data passed as a prop by propName
 */
function withFirestoreSub (WrappedComponent, getData, propName = 'data') {
  return class extends React.Component {
    state = {
      [propName]: null
    }

    unsubscribe = null

    passDataToComponent = data => this.setState({ [propName]: data })

    componentWillMount () {
      this.unsubscribe = getData(this.passDataToComponent)
    }

    componentWillUnmount () {
      this.unsubscribe()
    }

    render () {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <WrappedComponent {...this.state} {...this.props} />
    }
  }
}

export default withFirestoreSub
