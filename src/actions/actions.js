const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'
const EDIT_TODO = 'EDIT_TODO'
const EDIT_COMPLETED ='EDIT_COMPLETED'
const SET_FILTER = 'SET_FILTER'
const SET_SORT = 'SET_SORT'

let idTodo = 1

function actionAddTodo(text, importance, active) {
  return {
    type: ADD_TODO,
    text,
    importance,
    active,
    id: idTodo++,
  }
}

function actionDelTodo(id) {
  return {
    type: DELETE_TODO,
    id,
  }
}

function actionEditTodo(id, text, importance, active) {
  return {
    type: EDIT_TODO,
    id,
    text,
    importance,
    active,
  }
}

function actionEditCompleted(id, active) {
  return {
    type: EDIT_COMPLETED,
    id,
    active,
  }
}

function actionSetFilter(filter) {
  return {
    type: SET_FILTER,
    filter,
  }
}

function actionSetSort(sort) {
  return {
    type: SET_SORT,
    sort
  }
}

const Filters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
}

const Sort = {
  SORT_IMPORTANCE: 'SORT_IMPORTANCE',
  SORT_UNIMPORTANCE: 'SORT_UNIMPORTANCE',
  SORT_NONE: 'SORT_NONE',
}

export {
  actionAddTodo,
  actionDelTodo,
  actionEditTodo,
  actionEditCompleted,
  actionSetFilter,
  actionSetSort,
  Filters,
  Sort,
}