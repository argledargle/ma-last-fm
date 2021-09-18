import * as React from 'react'

export const Button = ({ className, id, type, onClick, name, disabled }) => {
  return (
    <button
      id={id}
      className={className}
      name={name}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {' '}
      {name}
    </button>
  )
}
