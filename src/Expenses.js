import React, { Component } from 'react';

export default class Expenses extends Component {
  render() {
    return (
      <section id="expenses">
        <div className="container">
          <h1>Lifestyle Upkeep</h1> 
          <div className="form col-md-3">
            <label>Daily</label>
            <input type="text" name="salary" placeholder="$" />
          </div>
          <div className="form col-md-3">
            <label>Yearly</label>
            <input type="text" name="salary" placeholder="$" />
          </div>
           <div className="form col-md-3">
            <label>Monthly</label>
            <input type="text" name="salary" placeholder="$" />
          </div>
          <div className="form col-md-3">
            <label>Expenses</label>
            <input type="text" name="salary" placeholder="$" />
          </div>
          <button type="submit" onClick={this.props.goBackClear}>Check Another Salary</button>
          <button type="submit" className="register"> Register to save Expenses</button>
        </div>
      </section>
    );
  }
}

// expenses col | month col | year col | day col
// calc bottom
// w/ additional hourly rate of $ needed every hour for lifestyle