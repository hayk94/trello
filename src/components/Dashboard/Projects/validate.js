const validate = values => {
  console.log('validate', values)
  const { name } = values
  const errors = {}

  if (!name) {
    errors.name = 'Required'
  }

  return errors
}

export default validate
