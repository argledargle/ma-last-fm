import * as React from 'react'
import styled from 'styled-components'
import { Card } from './Card'

const HorizontalDiv = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
  border: solid 1px white;
  margin: 10px;
`

export const Results = ({ content }) => {
  content.results.artistmatches.artist.map(result =>
    console.log('result:', result)
  )
  return (
    <>
    <p>Click on any of the artists below to learn more about them</p>
    <HorizontalDiv>
      {content.results.artistmatches.artist.map(result => (
        <Card cardContent={result} />
      ))}
    </HorizontalDiv>
    </>
  )
}
