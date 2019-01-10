import React from 'react'
import { Box, Flex } from 'grid-styled'

import ContainerTodoList from 'containers/ContainerTodoList'
import ContainerAddTodo from 'containers/ContainerAddTodo'
import ContainerFilter from 'containers/ContainerFilter'

const Main = () => {
  return (
    <Flex
      flexDirection='column'
    >
      <Box
        css={{
          flex: '1 0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          background: 'linear-gradient(245.58deg, #00CA9D -13.97%, #AEEFAA 73.92%, #FBFFC1 114.02%)',
        }}
      >
        <ContainerAddTodo />
        <ContainerFilter />
        <ContainerTodoList />
      </Box>
    </Flex>
  )
}

export default Main