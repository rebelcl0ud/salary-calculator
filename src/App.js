import React, { Component } from 'react';
import './App.css';
import Home from './Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salary: 0,
      weeks: 52,
      hours: 40,
    }

    this.onSalaryInputChange = this.onSalaryInputChange.bind(this);
    this.onWeeksInputChange = this.onWeeksInputChange.bind(this);
    this.onHoursInputChange = this.onHoursInputChange.bind(this);
    this.salaryToHourly = this.salaryToHourly.bind(this);
    this.goBackClear = this.goBackClear.bind(this);
  }

  componentDidMount() {
    console.log('locked and loaded')
  }

  goBackClear() {
    this.setState({
      salary: 0,
      weeks: 52,
      hours: 40,
    })
  }

  salaryToHourly() {
    // (salary / 52) / 40 = hourly rate
   let salary = this.state.salary;
   let weeks = this.state.weeks;
   let hours = this.state.hours;

   let hourlyRate = (salary / weeks) / hours;

   console.log(hourlyRate);
  }

  // salary
  onSalaryInputChange(event) {
    this.setState({
      salary: event.target.value
    })

    console.log(this.state.salary)
  }

  // weeks
  onWeeksInputChange(event) {
    this.setState({
      weeks: event.target.value
    })
    console.log(this.state.weeks)
  }

  // hours
  onHoursInputChange(event) {
    this.setState({
      hours: event.target.value
    })
    console.log(this.state.hours)
  }

  render() {
    return (
      <div className="home">
        <div className="container">
          <header>
            <div className="logo" onClick={this.goBackClear}>
              salary calculator
            </div>

            <nav className="menu">
              <a href="/" className="main-btn">Sign Up</a>
            </nav>
          </header>
          <Home
            globalState={this.state} 
            onSalaryInputChange={this.onSalaryInputChange}
            onWeeksInputChange={this.onWeeksInputChange}
            onHoursInputChange={this.onHoursInputChange}
            salaryToHourly={this.salaryToHourly}
            goBackClear={this.goBackClear} />
        </div>
      </div>
    );
  }
}

export default App;
