import * as React from 'react'
import styled from 'styled-components'
import { Card } from './Card'

const HorizontalDiv = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
  margin: 10px;
`

type ResultsProps = {
  content: any,
  callback: any
}

export const Results = ({ content, callback }: ResultsProps) => {
  return (
    <>
      <p>Click on any of the artists below to learn more about them</p>
      <HorizontalDiv>
        {content.results.artistmatches.artist.map((result: string, index: number) => (
          <Card callback={callback} cardContent={result} key={index} />
        ))}
      </HorizontalDiv>
    </>
  )
}
