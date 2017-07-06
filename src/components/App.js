import React from 'react'
import {Link} from 'react-router'
import littleBitLogo from '../../images/little-bit-logo-2-small.png'

const App = (props) => {
  return (
    <div>
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">

          <div className="navbar-header">
            <Link to="/" className="navbar-brand"><img src={littleBitLogo} alt="Bitcoin Logo" /></Link>
          </div>

          <div className="collapse navbar-collapse" id="bitcoin-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/about">ABOUT</Link></li>
              <li><Link to="/organizations">ORGANIZATIONS</Link></li>
              <li><Link to="/organizations/new">REGISTER</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        {props.children}
      </div>
    </div>

  )
}

export default App
