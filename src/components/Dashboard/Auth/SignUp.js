import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { Link } from 'react-router'

import { Field, reduxForm } from 'redux-form'

const styles = {
  container: {},
  textField: {},
  button: {
    margin: '15px 0px'
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
            SIGN UP
          </Typography>
          <Field
            component={TextField}
            name='email'
            label='Email'
            className={classes.textField}
            margin='normal'
          />
          <Field
            component={TextField}
            name='password'
            label='Password'
            type='password'
            className={classes.textField}
            margin='normal'
          />
          <Button type='submit' variant='contained' color='primary' className={classes.button}>
            Sign Up
          </Button>
          <Link to='/sign/in'>Sign In</Link>
        </Grid>
      </form>
    )
  }
}

export default reduxForm({ form: 'signup' })(withStyles(styles)(SignIn))
