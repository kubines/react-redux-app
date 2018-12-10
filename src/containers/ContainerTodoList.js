import React from 'react'
import { connect } from 'react-redux'

import { actionDelTodo, actionEditTodo } from 'actions/actions'

import TodoList from 'components/Main/TodoList'


function containerTodoList(props) {
    console.log(props.todos)
  return (
    <TodoList 
      todos={props.todos}
      delTodo={props.onDelTodo}
      editTodo={props.onEditTodo}
    />
  )
  
}

const mapStateToProps = state => {
  return {
    todos: state.todoReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDelTodo: (id) => dispatch(actionDelTodo(id)),
    onEditTodo: (id, text, importance) => dispatch(actionEditTodo(id, text, importance))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(containerTodoList)

