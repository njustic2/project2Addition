import React, { Component } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';



class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };
  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchGiphy(this.state.search);
  };

  _handleSubmit = event =>  {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
        <form role="form" onSubmit={this._handleSubmit}>

            <div className="form-group col-md-offset-3 col-md-6">
              <label htmlFor="name" className="text-center"> Name </label>
              <input name="name" type="text" className="form-control text-center" id="name" onChange={this.handleInputChange} />
            </div>

            <br />

            <div className="form-group col-md-offset-3 col-md-6">
              <label htmlFor="description"> Description </label>
              <input name="description" type="text" className="form-control text-center" id="description" onChange={this.handleInputChange} />
            </div>

            <br />

            <div className="form-group col-md-offset-3 col-md-6">
              <label htmlFor="chores"> Chores </label>
              <select name="chores" onChange={this.handleInputChange}>
                  <option value="war"> Start a war </option>
                  <option value="shield"> Battle shield </option>
                  <option value="speed"> Super Speed </option>
                  <option value="attack"> Attack </option>
              </select>
        
            </div>

            <br />

            <button type="submit" className="btn btn-info col-md-offset-5 col-md-2" id="searchBtn"> Submit </button>

          </form>
    )
  }
}

export default DropDown;

