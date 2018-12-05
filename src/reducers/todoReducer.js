const initialState = [
  {
    text: 'Wake up',
    importance: 4,
    id: 0,
  }
]

function todoReducer(state = initialState , action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state, {
          text: action.text,
          importance: action.importance,
          id: action.id,
        }
      ]
    default:
      return state
  }
}

export default todoReducer