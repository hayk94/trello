import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'

import Header from './Header'

class Dashboard extends Component {
  render () {
    return (
      <Grid container>
        <Header />
      </Grid>
    )
  }
}

export default Dashboard
