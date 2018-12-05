import React from 'react'
import { Box } from 'grid-styled'

import Todo from './Todo'

const TodoList = (props) => {
    return (
      <Box>
        {
          props.todos.map((item) => {
            return (
              <Todo 
                key={item.id}
                text={item.text}
                importance={item.importance}
              />
            )
          })
        }
      </Box>
    )
  }

export default TodoList
