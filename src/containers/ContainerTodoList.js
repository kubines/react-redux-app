import React from 'react'
import { connect } from 'react-redux'

import TodoList from 'components/Main/TodoList'

function containerTodoList(props) {
  return <TodoList todos={props.todos} />
}

const mapStateToProps = state => {
  return {
    todos: state.todoReducer
  }
}

export default connect(mapStateToProps)(containerTodoList)

