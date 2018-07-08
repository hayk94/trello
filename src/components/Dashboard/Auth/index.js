import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const styles = {
  container: {
    height: 500
  },
  paper: {
    padding: '50px 100px'
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
        className={classes.container}
        alignItems='center'
        direction='row'
        justify='center'
      >
        <Paper className={classes.paper}>
          {children}
        </Paper>
      </Grid>
    )
  }
}

export default withStyles(styles)(Auth)
