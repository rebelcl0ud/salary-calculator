import React, { Component } from 'react';
// https://www.iconfinder.com/bocatutor
import calclogo from './calc-logo.svg';

export default class Home extends Component {
  render() {
    return (
      <section id="home">
        <div className="container">
        	<div className="col-md-6">
         		<img className="calc-logo" src={calclogo} alt="calculator" />
         	</div>
         	
         	<div className="form col-md-6">
         		<h1>Salary to Hourly</h1>

         		<label>Salary</label>
	          <input type="text" name="salary" placeholder="$"/>
	          
						<button type="submit">Get Hourly Rate</button>
         	</div>
        </div>
      </section>
    );
  }
}