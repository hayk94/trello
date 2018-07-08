import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import Tooltip from '@material-ui/core/Tooltip'

import ProjectBox from './ProjectBox'

const styles = {
  projectsContainer: {
    height: '500px'
  },
  container: {
    position: 'relative',
    paddingTop: 20
  },
  button: {
    position: 'fixed',
    right: 30,
    bottom: 30
  }
}

class Projects extends Component {
  static propTypes = {
    classes: PropTypes.object
  }

  renderProjects = () => {
    return Array.from(Array(125)).map(() => <ProjectBox />)
  }

  render () {
    const {
      classes
    } = this.props
    return (
      <Grid
        className={classes.container}
        container
        >
        <Grid
          container
          spacing={16}
          className={classes.projectsContainer}
          alignItems='center'
          direction='row'
          justify='center'
          >
          {this.renderProjects()}
        </Grid>
        <Tooltip title='Create new project'>
          <Button variant='fab' color='primary' aria-label='add' className={classes.button}>
            <AddIcon />
          </Button>
        </Tooltip>
      </Grid>
    )
  }
}

export default withStyles(styles)(Projects)
