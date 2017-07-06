// Set up your root reducer here...
import { combineReducers } from 'redux';
import {organizationsReducer, organizationReducer} from './organizationReducers'

export default combineReducers({
  organizations: organizationsReducer,
  organization: organizationReducer
})
