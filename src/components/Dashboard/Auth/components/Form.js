import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

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
    children: PropTypes.func,
    handleSubmit: PropTypes.func,
    submitting: PropTypes.bool
  }

  renderTextField = props => {
    const {
      meta: {
        touched,
        error
      }
    } = props

    const isErrored = error && touched

    const displayErrorOrLabel = () => {
      if (isErrored) return error
      return props.label
    }

    return <TextField
      {...props}
      error={isErrored}
      label={displayErrorOrLabel()}
    />
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
      handleSubmit
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
          {children(this.renderTextField)}
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
