import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { Link } from 'react-router'

const styles = {
  button: {
    margin: '15px 0px'
  }
}

class Form extends Component {
  static propTypes = {
    classes: PropTypes.object,
    formTitle: PropTypes.string,
    buttonTitle: PropTypes.string,
    linkTo: PropTypes.string,
    linkTitle: PropTypes.string,
    children: PropTypes.array,
    handleSubmit: PropTypes.func,
    submitting: PropTypes.bool,
    error: PropTypes.string
  }

  render () {
    const {
      classes,
      formTitle,
      buttonTitle,
      linkTo,
      linkTitle,
      children,
      submitting,
      handleSubmit,
      error
    } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <Grid
          container
          spacing={16}
          alignItems='center'
          direction='column'
          justify='center'
        >
          <Typography variant='headline' gutterBottom>
            {formTitle}
          </Typography>
          <Typography style={{ color: 'red' }} variant='caption' gutterBottom align='center'>
            {error}
          </Typography>
          {children}
          <Button
            disabled={submitting}
            type='submit'
            variant='contained'
            color='primary'
            className={classes.button}
          >
            {buttonTitle}
          </Button>
          <Link to={linkTo}>{linkTitle}</Link>
        </Grid>
      </form>
    )
  }
}

export default withStyles(styles)(Form)
