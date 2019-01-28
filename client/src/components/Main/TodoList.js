import React from 'react'
import { Box } from 'grid-styled'

import Todo from './Todo'
import Preloader from 'ui/Preloader'

export default class TodoList extends React.Component {
  componentDidMount() {
    this.props.onFetchData('/todolist/')
  }
    render() {
      return (
        <Box
          mt={this.props.todos[0].load ? 50 : 0}
          css={{
            margin: '0 auto',
          }}
        >
          {
            this.props.todos[0].load ? 
            <Preloader />
            :
            this.props.todos.map((item) => {
              return (
                <Todo 
                  key={item._id}
                  id={item._id}
                  text={item.text}
                  active={item.active}
                  importance={item.importance}
                  delTodo={this.props.onDelTodo}
                  editTodo={this.props.onEditTodo}
                  editCompleted={this.props.onEditCompleted}
                />
              )
            })
          }
        </Box>
      )
    }
  }

