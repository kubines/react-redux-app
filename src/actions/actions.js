const ADD_TODO = 'ADD_TODO'

let idTodo = 1

function actionAddTodo(text, importance) {
  return {
    type: ADD_TODO,
    text,
    importance,
    id: idTodo++
  }
}

export {
  actionAddTodo,
}