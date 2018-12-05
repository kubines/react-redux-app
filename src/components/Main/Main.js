import React from 'react'
import { Box, Flex } from 'grid-styled'

import ContainerTodoList from 'containers/ContainerTodoList'
import ContainerAddTodo from 'containers/ContainerAddTodo'

export default class Main extends React.Component {
  render() {
    return (
      <Flex
      flexDirection='column'
      css={{
        minHeight: '100%',
        background: 'linear-gradient(245.58deg, #00CA9D -13.97%, #AEEFAA 73.92%, #FBFFC1 114.02%)',
      }}
    >
      <Box
        mx='auto'
        css={{
          flex: '1 0 auto',
        }}
      >
        <ContainerAddTodo />
        <ContainerTodoList />
      </Box>
    </Flex>
    )
  }
}
