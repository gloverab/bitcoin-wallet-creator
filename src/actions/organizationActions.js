import Axios from 'axios'
import thunk from 'redux-thunk'
import * as actionTypes from './actionTypes'

const apiUrl = "http://5955419c2374e400111e47e2.mockapi.io/api/organizations"
const newWalletAddressUrl = "https://block.io/api/v2/get_new_address/?api_key=7528-7ae8-607c-e2ab"

export const fetchOrganizationsSuccess = (organizations) => {
  return{
    type: actionTypes.FETCH_ORGANIZATIONS_SUCCESS,
    organizations
  }
}

export const fetchOrganizations = () => {
  return (dispatch) => {
    return Axios.get(apiUrl)
      .then(response => {
        dispatch(fetchOrganizationsSuccess(response.data))
      })
      .catch(error =>{
        throw(error)
      })
  }
}

export const createOrganizationSuccess = (organization) => {
  return {
    type: actionTypes.CREATE_ORGANIZATION_SUCCESS,
    organization
  }
}

export const createOrganization = (organization) => {
  return (dispatch) => {
    dispatch({ type: "CREATING_WALLET" })
    return Axios.get(newWalletAddressUrl)
      .then(response => {
        organization.walletAddress = response.data.data.address
        return Axios.post(apiUrl, organization)
      })
      .catch(error => {
        throw(error)
      })
  }
}


export const createWallet = (organization) => {
  return Axios.get(newWalletAddressUrl)
    .then(response => {
      organization.walletAddress = response.data.data.address
      Axios.put(apiUrl + '/' + organization.id, organization)
    })
    .catch(error => {
      throw(error)
    })
}


export const fetchOrganizationByIdSuccess = (organization) => {
  return{
    type: actionTypes.FETCH_ORGANIZATION_BY_ID_SUCCESS,
    organization
  }
}

export const fetchOrganizationById = (organizationId) => {
  return (dispatch) => {
    return Axios.get(apiUrl + '/' + organizationId)
      .then(response => {
        dispatch(fetchOrganizationByIdSuccess(response.data))
      })
      .catch(error => {
        throw(error)
      })
  }
}
