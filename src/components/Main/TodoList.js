import React from 'react'
import { Box } from 'grid-styled'

import Todo from './Todo'

// export to Container
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
                active={item.active}
                importance={item.importance}
                delTodo={props.onDelTodo}
                editTodo={props.onEditTodo}
                editCompleted={props.onEditCompleted}
              />
            )
          })
        }
      </Box>
    )
  }

export default TodoList
