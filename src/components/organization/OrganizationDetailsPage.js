import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionControllers} from 'redux'
import OrganizationDetails from './OrganizationDetails'
import * as organizationActions from '../../actions/organizationActions'

class OrganizationDetailsPage extends React.Component {
  constructor (props, context) {
    super (props, context)
  }

  componentDidMount() {
    this.props.fetchOrganizationById(this.props.params.id)
  }

  render() {
    return(
      <div className="container">
        <h1>Organization Details:</h1>
        <OrganizationDetails organization={this.props.organization} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    organization: state.organization
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrganizationById: organizationId => dispatch(organizationActions.fetchOrganizationById(organizationId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationDetailsPage)
