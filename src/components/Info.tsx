import * as React from 'react'
import styled from 'styled-components'

const InfoDiv = styled.div`
  width: 100%;
`

const A = styled.a`
  text-decoration: none;
  color: white;
  text-align: center;
  display: block;
`

const formatContent = (string: string) => {
  const subString = string.substr(0, 250)
  // Use this to format string without truncating words
  const formattedString = subString.substr(
    0,
    Math.min(subString.length, subString.lastIndexOf(' '))
  )
  return formattedString.concat('...')
}

interface contentObj {
  content: any
}

export const Info = ({ content }: contentObj) => {
  const { artist } = content
  return (
    <InfoDiv>
      <h3>Info for {artist.name}</h3>
      <p>{formatContent(artist.bio.content)}</p>
      <A href={artist.bio.links.link.href} target={'_blank'}>
        Click here to learn more about {artist.name}
      </A>
    </InfoDiv>
  )
}
