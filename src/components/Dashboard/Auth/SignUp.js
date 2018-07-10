import React, { Component } from 'react'

import { Field, reduxForm } from 'redux-form'

import validate from './validate'

import Form from './components/Form'

import { signUpCallbacks } from './onSubmit'

class SignUp extends Component {
  render () {
    return (
      <Form
        {...this.props}
        formTitle='SIGN UP'
        buttonTitle='SIGN UP'
        linkTo='/sign/in'
        linkTitle='Sign In'
      >
        {
          (renderTextField) => {
            return [
              <Field
                key='emailsignup'
                component={renderTextField}
                name='email'
                label='Email'
                margin='normal'
              />,
              <Field
                key='passwordsignup'
                component={renderTextField}
                name='password'
                label='Password'
                type='password'
                margin='normal'
              />
            ]
          }
        }
      </Form>
    )
  }
}

export default reduxForm({
  form: 'signup',
  validate,
  onSubmit: signUpCallbacks.onSubmit
})(SignUp)
