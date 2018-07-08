import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const styles = {
  container: {},
  textField: {},
  button: {
    marginTop: 15
  }
}

class SignIn extends Component {
  static propTypes = {
    classes: PropTypes.object
  }

  render () {
    const {
      classes
    } = this.props

    return (
      <form>
        <Grid
          container
          spacing={16}
          className={classes.container}
          alignItems='center'
          direction='column'
          justify='center'
        >
          <Typography variant='headline' gutterBottom>
            SIGN IN
          </Typography>
          <TextField
            id='email'
            label='Email'
            className={classes.textField}
            value={'gdfg'}
            onChange={() => console.log('ilog')}
            margin='normal'
          />
          <TextField
            id='password'
            label='Password'
            type='password'
            className={classes.textField}
            value={'gdfg'}
            onChange={() => console.log('ilog')}
            margin='normal'
          />
          <Button variant='contained' color='primary' className={classes.button}>
            Sign In
          </Button>
        </Grid>
      </form>
    )
  }
}

export default withStyles(styles)(SignIn)
