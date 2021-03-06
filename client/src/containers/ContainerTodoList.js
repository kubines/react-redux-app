import { connect } from 'react-redux'

import { 
  actionFetchDelTodo, 
  actionFetchEditTodo, 
  actionFetchEditCompleted, 
  actionFetchData,
  Filters, 
  Sort,
} from 'actions/actions'

import TodoList from 'components/Main/TodoList'

function setSort(todos, sort) {
  switch(sort) {
    case Sort.SORT_NONE:
      return todos
    case Sort.SORT_IMPORTANCE:
      return todos.sort((a, b) => b.importance - a.importance)
    case Sort.SORT_UNIMPORTANCE:
      return todos.sort((a, b) => a.importance - b.importance)
    default:
      return todos
  }
}

function setFilter(todos, filter) {
  switch (filter) {
    case Filters.SHOW_ALL:
      return todos.filter(todo => todo)
    case Filters.SHOW_ACTIVE:
      return todos.filter(todo => todo.active)
    case Filters.SHOW_COMPLETED:
      return todos.filter(todo => !todo.active)
    default:
      return todos
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    todos: setSort(setFilter(state.todoReducer, state.filterReducer.filter), state.filterReducer.sort)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDelTodo: (id) => dispatch(actionFetchDelTodo(id)),
    onEditTodo: (id, text, importance, active) => dispatch(actionFetchEditTodo(id, text, importance, active)),
    onEditCompleted: (id, active) => dispatch(actionFetchEditCompleted(id, active)),
    onFetchData: (url) => dispatch(actionFetchData(url)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

