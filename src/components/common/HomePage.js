import React from 'react'
import homeBackground from '../../../images/device-slider-background.jpg'

const Home = () => {

  let emailInput = null
  return(
    <div>
      <div className="container bottom-60">
        <h1 className="text-center top-90 bottom-30 letter-space-2">START ACCEPTING BITCOIN AT YOUR ORGANIZATION</h1>
        <div className="row">
          <div className="col-sm-8 col-centered text-center">
            <p className="bottom-60">LittleBit is a project aimed toward helping nonprofits like yours accept and understand Bitcoin. Despite what you may have heard, Bitcoin doesn't need to be complicated! We'll help you set up a wallet and incorporate an easy way to accept donations from otherwise unlikely donors.</p>
            <div className="col-md-7 col-centered pad-20 light-blue-background rounded">
              <form onSubmit={e => {

                  e.preventDefault()
                  var input = {
                    email: emailInput.value
                  }

                  props.handleSubmit(input)
                  e.target.reset()
                }}
                className="form-inline"
                >

                <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      ref={node => emailInput = node}
                      className="form-control mr-10" />
                    <input type="submit" value="Get Started" className="btn btn-default" />
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-image container-fluid pad-0">
      </div>

      <div className="dark-blue-background">
        <div className="container">
          <h1>HELLO WORLD</h1>
        </div>
      </div>
    </div>



  )
}

export default Home
