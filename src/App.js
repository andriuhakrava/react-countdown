import React, { Component } from 'react';
import Clock from './Clock';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deadline: 'January 1, 2020',
			newDeadline: ''
		}
	}

	handleInput = e => {
		this.setState({
			newDeadline: e.target.value
		});
	}

	changeDeadline = () => {
		this.setState({
			deadline: this.state.newDeadline
		});
	}

	render() {
		const { deadline } = this.state;
		return (
			<div className="app">
				<div className="app-title">Countdown to { deadline }</div>
				<Clock deadline={ deadline }  />
				<Form inline className="container clock-form">
					<FormControl placeholder="new date" 
												onChange={ this.handleInput }
												className="deadline-input" />
					<Button onClick={ this.changeDeadline }>Submit</Button>
				</Form>
			</div>
		)
	}
}

export default App;