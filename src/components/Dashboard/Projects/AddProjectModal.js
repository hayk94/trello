import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

import CenteredModal from '../../common/CenteredModal'

import { Field, reduxForm } from 'redux-form'

import Form from '../../common/Form'
import TextField from '../../common/Form/TextFieldForReduxForm'

import validate from './validate'
import onSubmit, { onSubmitSuccess } from './onSubmit'

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

  render () {
    const {
      open,
      onClose,
      children,
      classes
    } = this.props
    return (
      <CenteredModal
        open={open}
        onClose={onClose}
        children={children}
      >
        <Paper className={classes.paper}>
          <Form
            {...this.props}
            formTitle='Create New Project'
            buttonTitle='Create New Project'
          >
            <Field
              component={TextField}
              name='name'
              label='Name'
              margin='normal'
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
