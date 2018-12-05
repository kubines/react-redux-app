import React from 'react'
import styled, { css } from 'styled-components'

const P = styled.p`
font-family: Verdana, Geneva, Tahoma, sans-serif;
font-size: 16px;
  ${props => props.large && css`
    font-size: 22px;
  `}
  ${props => props.cursive && css`
    font-style: italic;
  `}
  ${props => props.small && css`
    font-size: 12px;
  `}
  ${props => props.grey && css`
    color: #DAD9E2;
  `}
`

const Text = (props) => {
  return (
    <P
      {...props}
    >
      {props.text}
    </P>
  )
}

export default Text