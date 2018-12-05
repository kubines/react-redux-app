import React from 'react'
import { connect } from 'react-redux'

import { actionAddTodo } from 'actions/actions'

import AddTodo from 'components/Main/AddTodo'

function containerAddTodo(props) {
  return <AddTodo onAddTodo={props.onAddTodo} />
}

const mapDispatchToProps = dispatch => {
  return {
    onAddTodo: (text, importace) => dispatch(actionAddTodo(text, importace))
  }
}

export default connect(null, mapDispatchToProps)(containerAddTodo)