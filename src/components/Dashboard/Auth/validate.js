const validate = values => {
  console.log('validate', values)
  const { email, password } = values
  const errors = {
    email: validateEmail(email),
    password: validatePassword(password)
  }
  return errors
}

export default validate

export const validateForgotPassword = ({ email }) => ({ email: validateEmail(email) })

const isValidEmail = email => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)

function validateEmail (email) {
  if (!email) {
    return 'Required'
  } else if (!isValidEmail(email)) {
    return 'Invalid email address'
  }
  return null
}

function validatePassword (password) {
  if (!password) {
    return 'Required'
  }
  return null
}
