import React from 'react'
import { Box } from 'grid-styled'

import ContainerTodoList from 'containers/ContainerTodoList'
import ContainerAddTodo from 'containers/ContainerAddTodo'
import ContainerFilter from 'containers/ContainerFilter'

const Main = () => {
  return (
    <Box
      css={{
        flex: '1 0 auto',
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <ContainerAddTodo />
      <ContainerFilter />
      <ContainerTodoList />
    </Box>
  )
}

export default Main