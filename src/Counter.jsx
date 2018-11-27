import React, { Component } from 'react';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
	}

	incrementCount = () => {
		this.setState({
			count: this.state.count + 1
		})
	}

	render() {
		return (
			<div className="counter">
				<h1>{this.state.count}</h1>
				<button onClick={this.incrementCount} className="btn btn-primary">
					Click to increment the number
				</button>
			</div>
		);
	}
}
export default Counter;