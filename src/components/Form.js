import * as React from 'react'
import getLastFmData from '../api/getLastFmData'
import { Button } from './Button'
import { TextInput } from './TextInput'

export const Form = ({ callback }) => {
  const [textValue, setTextValue] = React.useState('')

  function handleSubmit (e) {
    e.preventDefault()
    getLastFmData(textValue, callback)
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
      />
    </form>
  )
}
