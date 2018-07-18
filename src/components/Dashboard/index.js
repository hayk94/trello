// @flow
import * as React from 'react'
import Grid from '@material-ui/core/Grid'

import Header from './Header'

type Props = {
  children: React.Node
}

class Dashboard extends React.Component<Props> {
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
