import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class Sorter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "Sort"
		};
	}

	onSort = (event) => {
		if (event === "Alphabetical") {
			this.props.registerSorter((a, b) => a.name.localeCompare(b.name));
		} else if (event === "Reverse alphabetical") {
			this.props.registerSorter((a, b) => b.name.localeCompare(a.name));
		} else if (event === "Payload capacity") {
			this.props.registerSorter((a, b) => a.capacity - b.capacity);
		}
		this.setState({title: event});
	}

	render(){
		return (
			<div className="filter-list">
				<DropdownButton id="sortDropdown" title={this.state.title}>
					<MenuItem eventKey="Alphabetical" onSelect={this.onSort}>Alphabetical</MenuItem>
					<MenuItem eventKey="Reverse alphabetical" onSelect={this.onSort}>Reverse alphabetical</MenuItem>
					<MenuItem eventKey="Payload capacity" onSelect={this.onSort}>Payload capacity</MenuItem>
				</DropdownButton>
			</div>
		);
	}
}

export default Sorter;