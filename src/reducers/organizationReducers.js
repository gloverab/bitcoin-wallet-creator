import * as actionTypes from '../actions/actionTypes'

export const organizationsReducer = (state = [], action) => {
  switch (action.type) {

    case actionTypes.FETCH_ORGANIZATIONS_SUCCESS:
      return action.organizations

    case actionTypes.CREATE_ORGANIZATION_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.organization)
      ]

    default:
      return state
  }
}

export const organizationReducer = (state = [], action) => {
  switch (action.type) {

    case actionTypes.FETCH_ORGANIZATION_BY_ID_SUCCESS:
      return action.organization

    default:
      return state
  }
}
