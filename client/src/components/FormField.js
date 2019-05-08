import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InputMask from 'react-input-mask'
import './formField.css'

class FormField extends Component {
  state = {
    pristine: true,
    value: this.props.value
  }

  onChange = e => {
    const { value } = e.target
    const { onChange } = this.props

    this.setState({
      value
    })

    if (typeof onChange === 'function') {
      onChange(value)
    }
  }

  onBlur = e => {
    const { onBlur } = this.props
    this.setState({
      pristine: false
    })

    if (typeof onBlur === 'function') {
      onBlur(e)
    }
  }

  render() {
    const { name, value, onChange, onBlur, label, ...rest } = this.props

    return (
      <div className="nes-field">
        {label && <label htmlFor={name}>{label}</label>}
        <InputMask
        className="nes-input"
          id={name}
          name={name}
          onChange={this.onChange}
          onBlur={this.onBlur}
          value={this.state.value}
          {...rest}
        />
      </div>
    )
  }
}

FormField.defaultProps = {
  value: '',
  mask: '',
  maskChar: '',
  placeholder: ''
}

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  mask: PropTypes.string,
  maskChar: PropTypes.string,
  placeholder: PropTypes.string
}

export default FormField
