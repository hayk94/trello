import React, { Component } from 'react'

import { Field, reduxForm } from 'redux-form'

import Form from './components/Form'

import TextFieldForReduxForm from './components/TextFieldForReduxForm'

import validate from './validate'

import { onSignIn as onSubmit, onSubmitSuccess } from './onSubmit'

class SignIn extends Component {
  render () {
    return (
      <Form
        {...this.props}
        formTitle='SIGN IN'
        buttonTitle='SIGN IN'
        linkTo='/sign/up'
        linkTitle='Sign Up'
      >
        <Field
          component={TextFieldForReduxForm}
          name='email'
          label='Email'
          margin='normal'
        />,
        <Field
          component={TextFieldForReduxForm}
          name='password'
          label='Password'
          type='password'
          margin='normal'
        />
      </Form>
    )
  }
}

export default reduxForm({
  form: 'signin',
  validate,
  onSubmit,
  onSubmitSuccess
})(SignIn)
