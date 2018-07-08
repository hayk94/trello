import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import SignUp from './SignUp'
import SignIn from './SignIn'

import { signInPath, signUpPath } from '../../../Routes'

const styles = {
  container: {
    height: 500
  }
}

class Auth extends Component {
  static propTypes = {
    classes: PropTypes.object,
    route: PropTypes.object.isRequired
  }

  renderSignUpOrSignIn = () => {
    const { route: { path } } = this.props
    if (path === signUpPath) return <SignUp />
    if (path === signInPath) return <SignIn />
    return null
  }

  render () {
    const {
      classes
    } = this.props
    return (
      <Grid
        container
        spacing={16}
        className={classes.contianer}
        alignItems='center'
        direction='row'
        justify='center'
      >
        {this.renderSignUpOrSignIn()}
      </Grid>
    )
  }
}

export default withStyles(styles)(Auth)
