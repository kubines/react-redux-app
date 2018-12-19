const initialState = [
  {
    text: 'Wake up',
    importance: 4,
    active: true,
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
          active: action.active,
          id: action.id,
        }
      ]
    case 'DELETE_TODO':
        return state.filter(state => state.id !== action.id)
    case 'EDIT_TODO':
      return state.map(
        todo => 
          todo.id === action.id ? 
          {
            ...todo, 
            text: action.text, 
            importance: action.importance,
            active: action.active,
          } 
          : todo
      )
    case 'EDIT_COMPLETED':
      return state.map(
        todo =>
          todo.id === action.id ?
          {
            ...todo,
            active: action.active,
          }
          : todo
      )
    default:
      return state
  }
}

export default todoReducer