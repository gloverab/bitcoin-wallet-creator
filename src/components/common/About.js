import React from 'react'
import bitcoinHeart from '../../../images/bitcoin-heart-dark.png'
import bitcoinGold from '../../../images/bitcoin-gold.png'
import bitcoinRocket from '../../../images/fast-and-stable.png'
import walletLogo from '../../../images/control-your-wallets.png'

const About = () => {
  return (
    <div>
      <h1 className="bottom-15">What's this all about?</h1>
      <div className="row bottom-30">
        <div className="col-sm-8">
          <h3>Bitcoin!</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div className="col-sm-4">
          <img src={bitcoinHeart} alt="Bitcoin in a heart" className="about-img" />
        </div>
      </div>

      <hr />

      <div className="row bottom-30">
        <div className="col-sm-4">
          <img src={walletLogo} alt="Secure Wallet" className="about-img" />
        </div>

        <div className="col-sm-8">
          <h3>Receive Secure Donations</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>

      <hr />

    <div className="row bottom-30">
      <div className="col-sm-8">
        <h3>Why Bitcoin?</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

      <div className="col-sm-4">
        <img src={bitcoinRocket} alt="Bitcoin Rocket" className="about-img" />
      </div>

    </div>
    </div>
  )
}

export default About
