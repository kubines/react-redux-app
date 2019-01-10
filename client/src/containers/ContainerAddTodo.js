import { connect } from 'react-redux'

import { actionFetchAddTodo } from 'actions/actions'

import AddTodo from 'components/Main/AddTodo'

const mapDispatchToProps = dispatch => {
  return {
    onAddTodo: (text, importace, active) => dispatch(actionFetchAddTodo(text, importace, active))
  }
}

export default connect(null, mapDispatchToProps)(AddTodo)