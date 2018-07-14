import React, { Component } from 'react'

import { Field, reduxForm } from 'redux-form'

import Form from '../../common/Form'

import TextFieldForReduxForm from'../../common/Form/TextFieldForReduxForm'

import { validateForgotPassword as validate } from './validate'

import { onForgotPassword as onSubmit, onForgotPasswordSuccess as onSubmitSuccess } from './onSubmit'

class ForgotPassword extends Component {
  render () {
    return (
      <Form
        {...this.props}
        formTitle='FORGOT PASSWORD'
        buttonTitle='SEND RESET EMAIL'
        linkTo='/auth/signin'
        linkTitle='Sign In'
      >
        <Field
          component={TextFieldForReduxForm}
          name='email'
          label='Email'
          margin='normal'
        />
      </Form>
    )
  }
}

export default reduxForm({
  form: 'ForgotPassword',
  validate,
  onSubmit,
  onSubmitSuccess
})(ForgotPassword)
