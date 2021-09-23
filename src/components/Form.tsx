import * as React from 'react'
import { searchArtists } from '../api/searchArtists'
import { Button } from './Button'
import { TextInput } from './TextInput'

type FunctionProps = {
  callback: any
}

export const Form = ({ callback }: FunctionProps) => {
  const [textValue, setTextValue] = React.useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    searchArtists(textValue, callback)
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        id={'last-fm-search-input'}
        className={'search'}
        placeholder={'Pitbull'}
        value={textValue}
        onChange={setTextValue}
      />{' '}
      <Button
        id={'submit-button'}
        type={'submit'}
        name={'Click to search'}
        onClick={handleSubmit}
        disabled={textValue === '' ? true : false}
      />
    </form>
  )
}
