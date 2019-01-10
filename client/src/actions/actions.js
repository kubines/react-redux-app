const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'
const EDIT_TODO = 'EDIT_TODO'
const EDIT_COMPLETED ='EDIT_COMPLETED'
const SET_FILTER = 'SET_FILTER'
const SET_SORT = 'SET_SORT'
const ADD_FETCH_DATA = 'ADD_FETCH_DATA'

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

// add todo

function actionAddTodo(id, text, importance, active) {
  return {
    type: ADD_TODO,
    text,
    importance,
    active,
    id,
  }
}

function actionFetchAddTodo(text, importance, active) {
  return dispatch => {
    fetch('/todolist/add', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          text: text,
          importance: importance,
          active: active,
        }
      )
    })
    .then(response => response.json())
    .then(id => dispatch(actionAddTodo(id, text, importance, active)))
  }
}

// delete todo

function actionDelTodo(id) {
  return {
    type: DELETE_TODO,
    id,
  }
}

function actionFetchDelTodo(id) {
  return dispatch => {
    dispatch(actionDelTodo(id))
    fetch(`/todolist/delete/${id}`)
    .then(res => console.log(res))
  }
}

// edit todo

function actionEditTodo(id, text, importance, active) {
  return {
    type: EDIT_TODO,
    id,
    text,
    importance,
    active,
  }
}

function actionFetchEditTodo(id, text, importance, active) {
  return dispatch => {
    fetch(`/todolist/edit/${id}`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          text: text,
          importance: importance,
          active: active,
        }
      )
    })
    dispatch(actionEditTodo(id, text, importance, active))
  }
}

// edit completed
function actionEditCompleted(id, active) {
  return {
    type: EDIT_COMPLETED,
    id,
    active,
  }
}

function actionFetchEditCompleted(id, active) {
  return dispatch => {
    fetch(`/todolist/edit/completed/${id}`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          active: active,
        }
      )
    })
    dispatch(actionEditCompleted(id, active))
  }
}

// init store from server

function actionAddData(data) {
  return {
    type: ADD_FETCH_DATA,
    data: data,
  }
}
function actionFetchData(url) {
  return dispatch => {
      fetch(url)    
        .then((response) => response.json())
        .then((data) => dispatch(actionAddData(data)))
  }
}

// filters

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
  actionSetFilter,
  actionSetSort,
  actionFetchData,
  actionFetchAddTodo,
  actionFetchDelTodo,
  actionFetchEditTodo,
  actionFetchEditCompleted,
  Filters,
  Sort,
}