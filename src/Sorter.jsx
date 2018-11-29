import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class Sorter extends Component {

	onSort = (event) => {
		if (event === "Alphabetical") {
			this.props.items.sort((a, b) => a.name.localeCompare(b.name));
		} else if (event === "Reverse alphabetical") {
			this.props.items.sort((a, b) => b.name.localeCompare(a.name));
		} else if (event === "Payload capacity") {
			this.props.items.sort((a, b) => a.capacity - b.capacity);
		}
		this.props.onChanged(this.props.items);
	}

	render(){
		return (
			<div className="filter-list">
				<DropdownButton id="typeDropdown" title={"Sort"}>
					<MenuItem eventKey="Alphabetical" onSelect={this.onSort}>Alphabetical</MenuItem>
					<MenuItem eventKey="Reverse alphabetical" onSelect={this.onSort}>Reverse alphabetical</MenuItem>
					<MenuItem eventKey="Payload capacity" onSelect={this.onSort}>Payload capacity</MenuItem>
				</DropdownButton>
			</div>
		);
	}
}

export default Sorter;