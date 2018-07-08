import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'

import Header from './Header'

class Dashboard extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render () {
    return (
      <Grid container>
        <Header />
        {this.props.children}
      </Grid>
    )
  }
}

export default Dashboard
