import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Dropzone from 'react-dropzone'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  dropzone: {
    borderStyle: 'none',
    width: 'auto',
    height: 'auto'
  }
})

class DropzoneButton extends Component {
  static propTypes = {
    classes: PropTypes.object,
    onDrop: PropTypes.func,
    accept: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string
  }

  static defaultProps = {
    label: 'UPLOAD'
  }

  render () {
    const {
      classes,
      onDrop,
      accept,
      disabled,
      label
    } = this.props
    return (
      <Dropzone
        className={classes.dropzone}
        accept={accept}
        onDrop={onDrop}
        disabled={disabled}
      >
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          disabled={disabled}
        >
          {label}
          <CloudUploadIcon className={classes.rightIcon} />
        </Button>
      </Dropzone>
    )
  }
}

export default withStyles(styles)(DropzoneButton)
