// TODO: make a component that generates the dropdown button and the filtering at the same time
import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class Filter extends Component {

	// Sets display to false depending on the event that is passed in
	onFilter = (event) => {
		if (event === "All") {
			this.props.registerFilter(this.props.title,
				(e) => e.display = true);
		} else if (parseInt(event)) {
			this.props.registerFilter(this.props.title,
				(e) => e.display = e.capacity < parseInt(event));
		} else {
			this.props.registerFilter(this.props.title,
				(e) => e.display = e.org === event);
		}
	}

	onSearch = (event) => {
		let input = event.target.value.trim().toLowerCase();
		this.props.registerFilter(this.props.title, 
			(e) => e.name.toLowerCase().search(input) !== -1);
	}

	createDropdownItems = () => {
		let items = [];
		items.push(<MenuItem eventKey="All" key={0} onSelect={this.onFilter}>All</MenuItem>);
		for (let i = 0; i < this.props.items.length; i++) {
			let curItem = this.props.items[i];
			items.push(<MenuItem eventKey={curItem.eventKey} key={i+1}
				onSelect={this.onFilter}>{curItem.display}</MenuItem>);
		}
		return items;
	}

	render(){
		if (this.props.items) {
			return (
				<div className = "filter-list">	
					<DropdownButton id="typeDropdown" title={this.props.title}>
						{this.createDropdownItems()}
					</DropdownButton>
				</div>
			);
		} else {
			return (
				<input type="text" placeholder="Search" onChange={this.onSearch} />
			);
		}
	}
}

export default Filter;