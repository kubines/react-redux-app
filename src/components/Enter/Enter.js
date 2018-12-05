import React from 'react'
import { Box, Flex } from 'grid-styled'

import { MainTitle } from 'ui/Title'
import { RouteLink } from 'ui/Link'

const Enter = () => {
  return (
    <Flex
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      css={{
        height: '100%',
      }}
    >
      <MainTitle 
        text='Welcome to React-Redux-App'
      />
      <Box 
        mt='30px'
      />
      <RouteLink 
        text='enter'
        to='/main'
      />
    </Flex>
  )
}

export default Enter