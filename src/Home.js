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
         		<button type="submit" onClick={this.props.goBackClear}>Check Another Salary</button>
         	</div>
        </div>
      </section>
    );
  }
}