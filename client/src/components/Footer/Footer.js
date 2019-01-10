import React from 'react'
import { Flex } from 'grid-styled'

const Footer = () => {
  return (
    <Flex
      justifyContent='center'
      css={{
        height: '70px',
        background: 'black',
        color: 'white',
        flex: '0 0 auto',
      }}
      is='footer'
    >
      Footer
    </Flex>
  )
}

export default Footer