import * as React from 'react'

export const TextInput = ({ id, className, name, placeholder, value, onChange }) => {
  function handleChange (e) {
    onChange(e.target.value)
  }
  return (
    <input
      id={id}
      className={className}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  )
}
