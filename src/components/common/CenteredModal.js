import React from 'react'
import PropTypes from 'prop-types'

import Modal from '@material-ui/core/Modal'

const AddProjectModal = ({
  open,
  onClose,
  children
}) => <Modal
  aria-labelledby='simple-modal-title'
  aria-describedby='simple-modal-description'
  open={open}
  onClose={onClose}
>
  <div style={getModalStyle()}>{children}</div>
</Modal>

AddProjectModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node
}

export default AddProjectModal

function getModalStyle () {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    position: 'absolute'
  }
}
