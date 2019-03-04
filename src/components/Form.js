import React from 'react';
class Form extends React.Component{
  render() {
    return (
      <div id="search" className="mb-4 col-sm-12">
        <form onSubmit = {this.props.loadWeather} >
            <input type="text" placeholder="Search for a city" name="city" id="input"/>
            <input type="submit" value="OK" id="btn"/>
        </form>
        {this.props.error && <p id="error">{this.props.error}</p>}
      </div>
    )
  }
}
export default Form;
