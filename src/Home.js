import React, { Component } from 'react';
// https://www.iconfinder.com/bocatutor
import calclogo from './calc-logo.svg';

export default class Home extends Component {
  render() {
    return (
      <section id="home">
        <div className="container">
        	<div className="col-sm-4 col-sm-offset-2 col-md-4 col-md-offset-2">
         		<img className="calc-logo" src={calclogo} alt="calculator" />
         	</div>
         	
         	<div className="form col-sm-6 col-md-6">
         		<h1>Salary to Hourly</h1>

         		<label>Salary</label>
	          <input type="text" name="salary" placeholder="$" 
	          	value={this.props.globalState.salary}
	          	onChange={this.props.onSalaryInputChange}/>

	          <label>Weeks</label>
	          <input type="text" name="weeks" placeholder="# of weeks"
	          	value={this.props.globalState.weeks}
	          	onChange={this.props.onWeeksInputChange}/>

	          <label>Hours</label>
	          <input type="text" name="hours" placeholder="# of hours"
	          	value={this.props.globalState.hours}
	          	onChange={this.props.onHoursInputChange}/>
	          
						<button type="submit" onClick={this.props.salaryToHourly}>Get Hourly Rate</button>
         	</div>
        </div>
      </section>
    );
  }
}