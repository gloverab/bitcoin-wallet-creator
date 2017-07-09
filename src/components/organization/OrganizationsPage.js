import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import OrganizationForm from './OrganizationForm'
import { Link } from 'react-router'
import * as organizationActions from '../../actions/organizationActions'

class OrganizationsPage extends React.Component{
  constructor(props) {
        super(props)
    }

  render() {
    return(

      <div className="container">
        {this.props.isFetching ? <h2>Loading...</h2> : <h2></h2>}
        <h1>Organizations</h1>
        <div className="row">

          <div className="col-sm-12">
            <table className="table table-hover">
              <thead>
                <th>Organization Names</th>
                <th>City</th>
                <th>State</th>
              </thead>

              <tbody>
                {this.props.organizations.items.map((organization, index) => <tr key={index}>
                  <td>{organization.name}</td>
                  <td>{organization.city}</td>
                  <td>{organization.state}</td>
                  <td><Link to={`/organizations/${index+1}`}>View Organization</Link></td>
                </tr> )}
              </tbody>
            </table>

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

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationsPage)
