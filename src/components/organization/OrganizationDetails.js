import React, {PropTypes} from 'react'

const OrganizationDetails = ({organization}) => {

  return (
    <div className="media">
      <div className="media-left">
        <a href="#">
          <img className="media-object" src="http://i.imgur.com/cwLSrCW.png" alt="Placeholder" />
        </a>
      </div>
      <div className="media-body">
        <h4 className="media-heading">{organization.name}</h4>
        <ul>
          <li><strong>Point of Contact: </strong> {organization.firstName} {organization.lastName}</li>
          <li><strong>City: </strong> {organization.city}</li>
          <li><strong>State: </strong> {organization.state}</li>
          <li><strong>Wallet Address: </strong> {organization.walletAddress}</li>
          <br />
          <button className="btn btn-primary">Donate</button>
        </ul>
      </div>
    </div>
  )
}

export default OrganizationDetails
