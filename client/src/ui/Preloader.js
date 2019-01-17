import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Flex } from 'grid-styled'

const anim = keyframes`
0% {
  transform: scale(1);
  opacity: 0.75;
}
100% {
  transform: scale(1.2);
  opacity: 1;
}
`
const Span = styled.span`
display: block;
width: 15px;
height: 15px;
background-color: #A63F00;
border-radius: 50%;
animation: ${anim} 0.4s linear infinite;
animation-delay: ${props => props.delay}s;
animation-direction: alternate-reverse;
`

const Preloader = () => {
  return (
    <Flex
      justifyContent='space-between'
      css={{
        width: '60px',
        margin: '5px',
      }}
    >
      <Span delay={-0.5} />
      <Span delay={-0.75} />
      <Span delay={-1} />
    </Flex>
  )
}

export default Preloader