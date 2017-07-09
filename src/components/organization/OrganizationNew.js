import React from 'react'
import {Route, Redirect} from 'react-router'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import OrganizationForm from './OrganizationForm'
import * as organizationActions from '../../actions/organizationActions'

class OrganizationNew extends React.Component {
  constructor(props){
    super(props)
  }

  handleSubmit(input) {
    this.props.createOrganization(input)
    .then(data => {
      this.props.router.push(`/organizations/${data.organization.id}`)
    })
  }

  render() {
    return(
      <div>
        {this.props.organizations.isFetching ? <div className="loader">Creating your wallet...</div> : <div></div>}
        <div className="container">

          <div className="row">
            <div className="col-sm-5">
              <h1>Why Register?</h1>
              <p>Bitcoin has blah blah Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div className="col-sm-7">
              <h3 className="text-right bottom-30">Organization Information:</h3>
              <OrganizationForm handleSubmit={this.handleSubmit.bind(this)} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    organizations: state.organizations
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    createOrganization: organization => dispatch(organizationActions.createOrganization(organization))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationNew)
