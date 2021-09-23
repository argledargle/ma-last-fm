import * as React from 'react'
import { Form } from './components/Form'
import styled from 'styled-components'
import { Results } from './components/Results'

const RootDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

function App () {

  const [searchResults, setSearchResults] = React.useState(null)

  return (
    <RootDiv className='App'>
      <h1>ma-last-fm</h1>
      <h2>An app for searching last-fm</h2>
      <p>Type an artist name below to get started</p>
      <Form callback={setSearchResults} />
      {searchResults !== null ? <Results content={searchResults} /> : ''}
    </RootDiv>
  )
}

export default App
