import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const styles = {
  container: {
    height: 500
  }
}

class Auth extends Component {
  static propTypes = {
    classes: PropTypes.object,
    children: PropTypes.node.isRequired
  }

  render () {
    const {
      classes,
      children
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
        {children}
      </Grid>
    )
  }
}

export default withStyles(styles)(Auth)
