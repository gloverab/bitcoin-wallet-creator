import React, {PropTypes} from 'react'
const qrUrl = "https://chart.googleapis.com/chart?cht=qr&chs=250x250&chl="

const OrganizationDetails = ({organization}) => {
  const address = organization.walletAddress

  return (
    <div className="media">
      <div className="media-left">
        <a href="#">
          <img className="media-object" src={qrUrl + address} alt="Placeholder" />
        </a>
      </div>
      <div className="media-body">
        <h3 className="media-heading">{organization.name}</h3>
        <ul className="list-unstyled">
          <li><strong>Point of Contact: </strong> {organization.firstName} {organization.lastName}</li>
          <li><strong>City: </strong> {organization.city}</li>
          <li><strong>State: </strong> {organization.state}</li>
          <li><strong>Wallet Address: </strong> {address}</li>
          <br />
          <button className="btn btn-primary">Donate</button>
        </ul>
      </div>
    </div>
  )
}

export default OrganizationDetails
