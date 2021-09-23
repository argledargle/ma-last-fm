import * as React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  font-size: calc(10px + 2vmin);
`

type TextInputProps = {
  id?: string,
  className?: string,
  name?: string,
  placeholder?: string,
  value?: string,
  onChange: Function
}

export const TextInput = ({
  id,
  className,
  name,
  placeholder,
  value,
  onChange
}: TextInputProps) => {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value)
  }
  return (
    <Input
      id={id}
      className={className}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  )
}
