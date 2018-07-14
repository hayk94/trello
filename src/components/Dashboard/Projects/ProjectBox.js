import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { browserHistory } from 'react-router'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const styles = {
  paper: {
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: 100
  }
}

class ProjectBox extends Component {
  static propTypes = {
    _id: PropTypes.string,
    name: PropTypes.string,
    backgroundImage: PropTypes.string,
    classes: PropTypes.object
  }

  static defaultProps = {
    _id: 'ggg',
    name: 'Project Name',
    backgroundImage: `url('https://www.yourcat.co.uk/images/legacy/catimages/Breed_AmericanCurl/healthykittenmain.jpg')`
    // onClick: () => browserHistory.push(`/project/${Math.random()}`)
  }

  onClick = () => browserHistory.push(`/project/${this.props._id}`)

  render () {
    const { onClick } = this

    const {
      name,
      backgroundImage,
      classes
    } = this.props

    return (
      <Grid onClick={onClick} item>
        <Paper className={classes.paper} style={{ backgroundImage: backgroundImage }}>
          {name}
        </Paper>
      </Grid>
    )
  }
}

export default withStyles(styles)(ProjectBox)
