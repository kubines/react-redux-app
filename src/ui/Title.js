import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
font-size: 30px;
color: #ffff;
`

const MainTitle = (props) => {
  return (
    <H1>
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
  Title
}
