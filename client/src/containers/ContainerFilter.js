import { connect } from 'react-redux'

import { actionSetFilter, actionSetSort } from 'actions/actions'

import Filter from 'components/Main/Filter'

const mapDispatchToProps = (dispatch) => {
  return {
    onSetFilter: (filter) => dispatch(actionSetFilter(filter)),
    onSetSort: (sort) => dispatch(actionSetSort(sort))
  }
}

export default connect(null, mapDispatchToProps)(Filter)

