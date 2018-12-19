import { Filters, Sort } from 'actions/actions'

const initialState = {
  filter: Filters.SHOW_ALL,
  sort: Sort.SORT_NONE,
}

const filterReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.filter,
      }
    case 'SET_SORT':
      return {
        ...state,
        sort: action.sort,
      }
    default:
      return state
  }
}

export default filterReducer