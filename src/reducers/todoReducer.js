const initialState = [
  {
    text: 'Wake up',
    importance: 4,
    id: 0,
  }
]

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state, {
          text: action.text,
          importance: action.importance,
          id: action.id,
        }
      ]
    case 'DELETE_TODO':
        return state.filter(state => state.id !== action.id)
    case 'EDIT_TODO':
      return state.map(
        todo => 
          todo.id === action.id ? {...todo, text: action.text, importance: action.importance} : todo
      )
    default:
      return state
  }
}

export default todoReducer