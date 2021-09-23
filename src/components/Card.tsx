import * as React from 'react'
import styled from 'styled-components'
import { getArtistInfo } from '../api/getArtistInfo'
import { Button } from './Button'

const CardDiv = styled.div`
  color: white;
  text-decoration: none;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

const P = styled.p`
  text-align: center;;
  min-width: 17rem;
  white-space: nowrap;
`

type CardProps = {
  cardContent: any
  callback: Function
}

export const Card = ({ cardContent, callback }: CardProps) => {
  const handleClick = () => {
    getArtistInfo(cardContent.name, callback)
  }

  return (
    <CardDiv>
      <P>{cardContent.name}</P>
      <Button onClick={handleClick} name={'Show more'} />
    </CardDiv>
  )
}
