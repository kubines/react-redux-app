import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { Link as Route } from 'react-router-dom'

const showRouteLink = keyframes`
0% {
  opacity: 0;
  margin-top: 70px;
}
100% {
  opacity: 1;
  margin-top: 0px;
}
`

const Router = styled(Route)`
padding: 15px 30px;
background: #00CA9D;
border: 0;
border-radius: 100px;
transition: .1s ease-in;
color: #ffff;
font-weight: bold;
line-height: 11px;
font-size: 12px;
text-align: center;
letter-spacing: 1.2px;
text-transform: uppercase;
text-decoration: none;
&:hover {
      background: #008366 ;
    }
  ${props=> props.show && css`
    animation: ${showRouteLink} 0.6s 0.3s both;
  `}
`

const RouteLink = (props) => {
  return (
    <Router
      {...props}
    >
      {props.text}
    </Router>
  )
}

const A = styled.a`
font-size: 18px;
color: #FFFFFF;
cursor: pointer;
transition: .1s ease;
  &:hover {
    opacity: .8;
  }
`

const Link = (props) => {
  return (
    <A
      {...props}
    >
      {props.text}
    </A>
  )
}

export {
  RouteLink,
  Link,
}