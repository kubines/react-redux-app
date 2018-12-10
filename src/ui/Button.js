import React from 'react'
import styled, { css } from 'styled-components'

const Btn = styled.button`
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
  &:hover {
    cursor: pointer;
    opacity: .7;
  }
  &:focus, &:active {
    outline: none;
  }
  ${props => props.small && css`
    padding: 5px 10px;
  `}
  ${props => props.red && css`
    background: #A63F00;
  `}
`

const Button = (props) => {
  return (
    <Btn
      {...props}
    >
      {props.text}
    </Btn>
  )
}

export default Button