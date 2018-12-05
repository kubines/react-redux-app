import React from 'react'
import styled from 'styled-components'

const Area = styled.textarea`
width: 100%;
height: 60px;
padding: 10px;
font-size: 16px;
color: grey;
border: 0;
outline: none;
resize: none;
overflow: auto;
background: transparent;
`

const TextArea = (props) => {
  return (
    <Area
      {...props}
      ref={props.inputRef}
    />
  )
}

export default TextArea