import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Results from './Results';
import Expenses from './Expenses';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
      salary: 0,
      weeks: 52,
      hours: 40,
      hourlyRate: 0,
      expenses: {
        monthlyExp: 0,
        yearlyExp: 0,
        dailyExp: 0,
      }, 
    }

    this.onSalaryInputChange = this.onSalaryInputChange.bind(this);
    this.onWeeksInputChange = this.onWeeksInputChange.bind(this);
    this.onHoursInputChange = this.onHoursInputChange.bind(this);
    this.salaryToHourly = this.salaryToHourly.bind(this);
    this.goBackClear = this.goBackClear.bind(this);
    this.pageRoute = this.pageRoute.bind(this);
    
    this.goExpenses = this.goExpenses.bind(this);
    this.onMonthlyInputChange = this.onMonthlyInputChange.bind(this);
    this.handleExpChange = this.handleExpChange.bind(this);
  }

  componentDidMount() {
    console.log('locked and loaded')
  }

  pageRoute() {
    switch(this.state.page) {
      case 'home':
        // code
        return <Home globalState={this.state} 
          onSalaryInputChange={this.onSalaryInputChange}
          onWeeksInputChange={this.onWeeksInputChange}
          onHoursInputChange={this.onHoursInputChange}
          salaryToHourly={this.salaryToHourly}
          goBackClear={this.goBackClear} />
        break;
      case 'results':
        // code
        return <Results globalState={this.state} 
          goBackClear={this.goBackClear}
          goExpenses={this.goExpenses} />
        break;
      case 'expenses':
        // code
        return <Expenses globalState={this.state} 
          goBackClear={this.goBackClear} 
          onMonthlyInputChange={this.onMonthlyInputChange}
          handleExpChange={this.handleExpChange} />
        break;
      default:
        return <Home />;
    }
  }

  goBackClear() {
    this.setState({
      page: 'home',
      salary: 0,
      weeks: 52,
      hours: 40,
      hourlyRate: 0,
    })
  }

  // - - - expenses - - - //
  goExpenses() {
    this.setState({
      page: 'expenses',
    })
  }

  handleExpChange(monthlyExp) {
    console.log(this.state.expenses.monthlyExp);

    let yearlyExp = this.state.expenses.monthlyExp * 12
    yearlyExp = yearlyExp.toFixed(2);

    let dailyExp = this.state.expenses.monthlyExp / 30
    dailyExp = dailyExp.toFixed(2);
    
    console.log('triggered')
    
    this.setState({
      expenses: {
        yearlyExp: yearlyExp,
        dailyExp: dailyExp,
      } 
    }, () => {
      console.log(this.state.expenses.yearlyExp, this.state.expenses.dailyExp)
    })
  }

  onMonthlyInputChange(event) {  
    this.setState({
      expenses: {
        monthlyExp: event.target.value,
      } 
    }, () => {
      this.handleExpChange()
    })
  }

  // - - - salary to hourly - - - //
  salaryToHourly() {
    // (salary / 52) / 40 = hourly rate
   let salary = this.state.salary;
   let weeks = this.state.weeks;
   let hours = this.state.hours;

   let hourlyRate = (salary / weeks) / hours;
   hourlyRate = hourlyRate.toFixed(2);

   // console.log(hourlyRate);

   this.setState({
    page: 'results',
    salary: salary,
    weeks: weeks,
    hours: hours,
    hourlyRate: hourlyRate,
   })
  }

  // salary
  onSalaryInputChange(event) {
    this.setState({
      salary: event.target.value
    })

    // console.log(this.state.salary)
  }

  // weeks
  onWeeksInputChange(event) {
    this.setState({
      weeks: event.target.value
    })
    // console.log(this.state.weeks)
  }

  // hours
  onHoursInputChange(event) {
    this.setState({
      hours: event.target.value
    })
    // console.log(this.state.hours)
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
          {this.pageRoute()}
        </div>
      </div>
    );
  }
}

export default App;
