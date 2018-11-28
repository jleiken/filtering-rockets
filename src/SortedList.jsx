import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import Grid from './Grid';

class FilteredList extends Component {
	constructor(props) {
		super(props);

		// The state is just a list of key/value pairs (like a hashmap)
		this.state = {
			search: "",
			type: "All"
		};
	}

	// Sets the state whenever the user types on the search bar
	onSearch = (event) => {
		this.setState({search: event.target.value.trim().toLowerCase()});
	}

	// Changes filterItem to take into account the "type" state variable when filtering
	filterItem = (item) => {
		return item.name.toLowerCase().search(this.state.search) !== -1;
	}

	onSort = (event) => {
		if (event === "Alphabetical") {
			this.props.items.sort((a, b) => a.name.localeCompare(b.name));
		} else if (event === "Reverse alphabetical") {
			this.props.items.sort((a, b) => b.name.localeCompare(a.name));
		} else if (event === "Payload capacity") {
			this.props.items.sort((a, b) => a.capacity - b.capacity);
		}
		this.forceUpdate();
	}

	render(){
		return (
			<div className = "filter-list">
				<input type = "text" placeholder = "Search" onChange = {this.onSearch} />

				<DropdownButton id="typeDropdown" title={"Sort"}>
					<MenuItem eventKey="Alphabetical" onSelect={this.onSort}>Alphabetical</MenuItem>
					<MenuItem eventKey="Reverse alphabetical" onSelect={this.onSort}>Reverse alphabetical</MenuItem>
					<MenuItem eventKey="Payload capacity" onSelect={this.onSort}>Payload capacity</MenuItem>
				</DropdownButton>

				<Grid items={this.props.items.filter(this.filterItem)} />
			</div>
		);
	}
}

export default FilteredList;