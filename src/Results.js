import React, { Component } from 'react';

export default class Results extends Component {
  render() {
    return (
      <section id="results">
        <div className="container">
         	<div className="form col-md-12">
         		<h1>Annual Salary ${this.props.globalState.salary} converts to...</h1> 
            <h2>${this.props.globalState.hourlyRate} /hr</h2>
            
         		<button type="submit" onClick={this.props.goBackClear}>Check Another Salary</button>
         	</div>
        </div>
      </section>
    );
  }
}