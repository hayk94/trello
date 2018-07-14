import React, { Component } from 'react'

import { Field, reduxForm } from 'redux-form'

import Form from '../../common/Form'

import TextFieldForReduxForm from'../../common/Form/TextFieldForReduxForm'

import validate from './validate'

import { onSignUp as onSubmit, onSubmitSuccess } from './onSubmit'

class SignUp extends Component {
  render () {
    return (
      <Form
        {...this.props}
        formTitle='SIGN UP'
        buttonTitle='SIGN UP'
        linkTo='/auth/signin'
        linkTitle='Sign In'
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
  form: 'signup',
  validate,
  onSubmit,
  onSubmitSuccess
})(SignUp)
