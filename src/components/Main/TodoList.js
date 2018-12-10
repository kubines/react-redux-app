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
                id={item.id}
                text={item.text}
                importance={item.importance}
                delTodo={props.delTodo}
                editTodo={props.editTodo}
              />
            )
          })
        }
      </Box>
    )
  }

export default TodoList
