import * as React from 'react'
import styled from 'styled-components'

type ButtonProps = {
  className?: string,
  id?: string,
  type?: string,
  onClick: React.MouseEventHandler,
  disabled?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const StyledButton = styled.button`
  font-size: calc(10px + 2vmin);
`

export const Button = ({ className, id, type, onClick, name, disabled }: ButtonProps) => {
  return (
    <StyledButton
      id={id}
      className={className}
      name={name}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {' '}
      {name}
    </StyledButton>
  )
}
