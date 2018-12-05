import React from 'react'
import { Flex } from 'grid-styled'

import Menu from './Menu'

const Header = () => {
  return (
    <Flex
     justifyContent='center'
     alignItems='center'
     css={{
       width: '100%',
       height: '100px',
       flex: '0 0 auto',
     }}
    >
      <Menu />
    </Flex>
  )
}

export default Header