import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

import CenteredModal from '../../common/CenteredModal'
import DropzoneButtonField from '../../common/Form/DropzoneButtonFieldForReduxForm'

import { Field, reduxForm, SubmissionError } from 'redux-form'

import Form from '../../common/Form'
import TextField from '../../common/Form/TextFieldForReduxForm'

import validate from './validate'
import onSubmit, { onSubmitSuccess } from './onSubmit'

import { storage } from '../../../initFirebase'

import randomstring from 'randomstring'

const styles = {
  paper: {
    padding: '50px 100px'
  }
}

class AddProjectModal extends Component {
  static propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.node,
    classes: PropTypes.object
  }

  state = {
    uploadIsInProgress: false,
    uploadError: ''
  }

  IMAGE_UPLOAD_ERROR = 'IMAGE_UPLOAD_ERROR'
  // TODO: MOVE ALL THE UPLOADING LOGIC TO A SEPARATE COMPONENT
  // inputOnChange is passed from reduxForm prop input.onChange
  onDrop = inputOnChange => async files => {
    console.log('files', files)
    const imageUrl = await this.uploadImage(files[0])
    console.log('imageUrl', imageUrl)
    inputOnChange(imageUrl)
  }

  uploadImage = file => {
    // https://firebase.google.com/docs/storage/web/upload-files?authuser=0
    // Points to the root reference
    const storageRef = storage.ref()

    // Points to 'images'
    const imagesRef = storageRef.child('images')

    // Points to 'images/space.jpg'
    // Note that you can use variables to create child values
    const fileName = `${randomstring.generate()}`
    const imageRef = imagesRef.child(fileName)
    const uploadTask = imageRef.put(file)
    uploadTask.on(
      'state_changed',
      () => this.setState({ uploadIsInProgress: true }),
      error => {
        console.error('onerr', error)
        this.setState({
          uploadIsInProgress: false,
          error: error.message_
        })
      },
      snapshot => {
        this.setState({ uploadIsInProgress: false })
        return snapshot.ref.getDownloadURL().then(downloadURL => downloadURL)
      }
    )
    return uploadTask
  }

  validateImageUrl = value => {
    if (value === this.IMAGE_UPLOAD_ERROR) throw new SubmissionError({ _error: `Couldn't upload the image` })
  }

  // componentWillUnmount () {
  //   console.log('componentWillUnmount props', this.props)
  //   // TODO: NEED TO revokeObjectURL however for some reason
  //   // values are not passed as props to my component
  //   const { values: { image: { preview } } } = this.props
  //   window.URL.revokeObjectURL(preview)
  // }

  render () {
    const {
      open,
      onClose,
      children,
      classes
    } = this.props
    const {
      uploadIsInProgress,
      uploadError
    } = this.state
    return (
      <CenteredModal
        open={open}
        onClose={onClose}
        children={children}
      >
        <Paper className={classes.paper}>
          <Form
            {...this.props}
            _error={uploadError}
            formTitle='Create New Project'
            buttonTitle='Create New Project'
          >
            <Field
              component={TextField}
              name='name'
              label='Name'
            />
            <Field
              component={DropzoneButtonField}
              name='image'
              label='Upload Image'
              onDropzoneDrop={this.onDrop}
              validate={this.validateImageUrl}
              uploadIsInProgress={uploadIsInProgress}
            />
          </Form>
        </Paper>
      </CenteredModal>
    )
  }
}

export default reduxForm({
  form: 'CreateNewProject',
  validate,
  onSubmit,
  onSubmitSuccess
})(withStyles(styles)(AddProjectModal))
