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

	// Sets the state of the "type" state variable depending on what is passed in
	onFilter = (event) => {
		this.setState({type: event});
	}

	// Changes filterItem to take into account the "type" state variable when filtering
	filterItem = (item) => {
		return item.name.toLowerCase().search(this.state.search) !== -1 
			&& (this.state.type === "All" || item.type === this.state.type);
	}

	render(){
		return (
			<div className = "filter-list">	
				<h1>American Rockets</h1>

				<DropdownButton id="typeDropdown" title={"Filter by organization"}>
					<MenuItem eventKey="All" onSelect={this.onFilter}>All</MenuItem>
					<MenuItem eventKey="NASA" onSelect={this.onFilter}>NASA</MenuItem>
					<MenuItem eventKey="ULA" onSelect={this.onFilter}>ULA</MenuItem>
					<MenuItem eventKey="SpaceX" onSelect={this.onFilter}>SpaceX</MenuItem>
					<MenuItem eventKey="Other" onSelect={this.onFilter}>Other</MenuItem>
				</DropdownButton>

				<DropdownButton id="typeDropdown" title={"Filter by payload capacity"}>
					<MenuItem eventKey="all" onSelect={this.onFilter}>All</MenuItem>
					<MenuItem eventKey="small" onSelect={this.onFilter}>{"<"}200 kg</MenuItem>
					<MenuItem eventKey="medium" onSelect={this.onFilter}>{">"}200 kg or {"<"}500 kg</MenuItem>
					<MenuItem eventKey="large" onSelect={this.onFilter}>{">"}500 kg</MenuItem>
				</DropdownButton>

				<input type = "text" placeholder = "Search" onChange = {this.onSearch} />

				<DropdownButton id="typeDropdown" title={"Sort"}>
					<MenuItem eventKey="Alphabetical" onSelect={this.onSort}>Alphabetical</MenuItem>
					<MenuItem eventKey="Reverse alphabetical" onSelect={this.onSort}>Reverse alphabetical</MenuItem>
					<MenuItem eventKey="Payload capacity" onSelect={this.onSort}>Payload capacity</MenuItem>
				</DropdownButton>

				<Grid items = {this.props.items.filter(this.filterItem)} />
			</div>
		);
	}
}

export default FilteredList;