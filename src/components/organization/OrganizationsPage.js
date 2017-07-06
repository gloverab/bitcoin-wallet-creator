import React from 'react'
import { connect } from 'react-redux'
import OrganizationForm from './OrganizationForm'
import { Link } from 'react-router'
import * as organizationActions from '../../actions/organizationActions'

class OrganizationsPage extends React.Component{
  constructor() {
        super();
        this.state = {
            items: [
                {
                    id: 1,
                    label: 'List item 1'
                },
                {
                    id: 2,
                    label: 'List item 2'
                },
                {
                    id: 3,
                    label: 'List item 3'
                },
                {
                    id: 4,
                    label: 'List item 4'
                }
            ],
            hasErrored: false,
            isLoading: false
        };
    }

  render() {
    if (this.state.hasErrored) {
      return <p>Sorry! There was an error loading the items.</p>
    }
    if (this.state.isLoading) {
      return <p>Loading...</p>
    }


    return(
      <div>
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
                {this.props.organizations.map((organization, index) => <tr key={index}>
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
