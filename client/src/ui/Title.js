import React from 'react'
import styled, { css, keyframes } from 'styled-components'

const showTitle = keyframes`
0% {
  opacity: 0;
  margin-top: -20px;
}
100% {
  opacity: 1;
  margin-top: 0px;
}
`

const H1 = styled.h1`
font-size: 30px;
color: #ffff;
  ${props => props.show && css`
    animation: ${showTitle} 0.6s 0.3s both;
  `}
`

const MainTitle = (props) => {
  return (
    <H1
      {...props}
    >
      {props.text}
    </H1>
  )
}

const H2 = styled.h2`
font-size: 28px;
`

const Title = (props) => {
  return (
    <H2>      
      {props.text}
    </H2>
  )
}
export {
  MainTitle,
  Title,
}
