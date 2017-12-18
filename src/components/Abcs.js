import React from 'react'
import PropTypes from 'prop-types'

const Abcs = ({ letters }) => (
  <span>
    {letters.join('')}
  </span>
)

Abcs.propTypes = {
  letters: PropTypes.array.isRequired
}

export default Abcs
