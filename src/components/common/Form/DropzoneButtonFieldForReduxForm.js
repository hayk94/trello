import React from 'react'
import PropTypes from 'prop-types'

import DropzoneButton from '../DropzoneButton'

const DropzoneButtonFieldForReduxForm = props => {
  console.log('DropzoneButtonFieldForReduxForm props', props)

  const {
    onDropzoneDrop,
    input: { onChange }
  } = props

  const onDrop = onDropzoneDrop(onChange)

  return <DropzoneButton
    {...props}
    {...props.input}
    disabled={props.uploadIsInProgress}
    onDrop={onDrop}
  />
}

DropzoneButtonFieldForReduxForm.propTypes = {
  onDropzoneDrop: PropTypes.func,
  input: PropTypes.object,
  uploadIsInProgress: PropTypes.bool
}

export default DropzoneButtonFieldForReduxForm
