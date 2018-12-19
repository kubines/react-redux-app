import React from 'react'
import styled, { css } from 'styled-components'
import { Flex } from 'grid-styled'

import Text from 'ui/Text'

const Circle = styled.div`
width: 14px;
height: 14px;
border-radius: 50%;
background-color: #DAD9E2;
transition: 0.1s ease;
  ${props => props.active && css`
    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  `}
  ${props => props.importance && css`
    background-color: #00CA9D;
  `}
`

const ImportanceRating = (props) => {
  let list = []
  for ( let i = 1; i < props.maxImportance; i++) {
    list.push(
      <Circle
        key={i}
        onClick={props.onClick ? () => props.onClick(i) : null}
        importance={props.importance >= i ? true : false}
        active={props.active}
      />
    )
  }
    return (
      <Flex
        alignItems='center'
      >
        <Text
            text='importance:'
            cursive
            small
            grey
          />
        <Flex
          justifyContent='space-between'
          alignItems='center'
          css={{
            width: '80px',
            marginLeft: '5px',
          }}
        >
          {list}
        </Flex>
      </Flex>
    )
}

export default ImportanceRating