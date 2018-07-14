import React from 'react'
import PropTypes from 'prop-types'

import TextField from '@material-ui/core/TextField'

const TextFieldForReduxForm = props => {
  const {
    meta: {
      touched,
      error
    },
    label
  } = props

  const isErrored = error && touched

  const displayErrorOrLabel = () => {
    if (isErrored) return error
    return label
  }

  return <TextField
    {...props}
    {...props.input}
    error={isErrored}
    label={displayErrorOrLabel()}
  />
}

export default TextFieldForReduxForm

TextFieldForReduxForm.propTypes = {
  meta: PropTypes.object,
  label: PropTypes.string,
  input: PropTypes.object
}
