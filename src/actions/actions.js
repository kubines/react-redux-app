const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'
const EDIT_TODO = 'EDIT_TODO'

let idTodo = 1

function actionAddTodo(text, importance) {
  return {
    type: ADD_TODO,
    text,
    importance,
    id: idTodo++,
  }
}

function actionDelTodo(id) {
  return {
    type: DELETE_TODO,
    id,
  }
}

function actionEditTodo(id, text, importance) {
  return {
    type: EDIT_TODO,
    id,
    text,
    importance,
  }
}

export {
  actionAddTodo,
  actionDelTodo,
  actionEditTodo,
}