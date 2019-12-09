import React, { Component } from 'react';
import './App.css';

class App extends Component {

	constructor() {
		super();
		this.state = { count: 0 }
	}

	update(e) {
		this.setState({count: e.target.value.length})
	}

  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.update.bind(this)}></textarea>
        <div className="counter">{this.state.count}</div>
      </div>
    );
  }
}

export default App;
