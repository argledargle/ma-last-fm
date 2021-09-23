import * as React from 'react'
import styled from 'styled-components'

const A = styled.a`
  color: white;
  text-decoration: none;
  padding: 0 20px;
  border: 1px green solid;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

export const Card = ({ cardContent }) => {
  console.log('cardContent', cardContent)
  return (
      <A href={cardContent.url} target="_blank">
        <p>{cardContent.name}</p>
        <img
          src={cardContent.image[2]['#text']}
          alt={`${cardContent.name}`}
        />
      </A>
  )
}
