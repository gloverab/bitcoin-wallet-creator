import React from 'react'

const OrganizationForm = (props) => {
  let nameInput, firstNameInput, lastNameInput, emailInput, cityInput, stateInput = null

  return(
    <form onSubmit={e => {
      e.preventDefault()

      var input = {
        name: nameInput.value,
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        email: emailInput.value,
        city: cityInput.value,
        state: stateInput.value.toUpperCase()
      }

      props.handleSubmit(input)
      e.target.reset()
    }}
      className="form-horizontal"
    >

      <div className="form-group">
        <label className="col-sm-4 control-label">Organization Name: </label>
        <div className="col-sm-8">
          <input
            type="text"
            name="name"
            ref={node => nameInput = node}
            className="form-control" />
        </div>
      </div>
      <br />

      <div className="form-group">
        <label className="col-sm-4 control-label">Your Name: </label>
        <div className="col-sm-4">
          <input
            type="text"
            name="first-name"
            ref={node => firstNameInput = node}
            placeholder="First"
            className="form-control" />
        </div>
        <div className="col-sm-4">
          <input
            type="text"
            name="last-name"
            ref={node => lastNameInput = node}
            placeholder="Last"
            className="form-control" />
        </div>
      </div>
      <br />

        <div className="form-group">
          <label className="col-sm-4 control-label">Email: </label>
          <div className="col-sm-8">
            <input
              type="text"
              name="email"
              ref={node => emailInput = node}
              placeholder="mostlikely@gmail.com"
              className="form-control" />
          </div>
        </div>
        <br />

      <div className="form-group">
        <label className="col-sm-4 control-label">Location: </label>
        <div className="col-sm-6">
          <input
            type="text"
            name="city"
            ref={node => cityInput = node}
            placeholder="City"
            className="form-control" />
        </div>
        <div className="col-sm-2">
          <input
            type="text"
            name="state"
            ref={node => stateInput = node}
            placeholder="State"
            maxLength="2"
            className="form-control" />
        </div>
      </div>
      <br />



      <div className="form-group">
        <div className="col-sm-offset-2 col-sm-10">
          <input type="submit" className="btn btn-default pull-right"/>
        </div>
      </div>
    </form>

  )
}

export default OrganizationForm
