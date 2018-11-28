// TODO: make a component that generates the dropdown button and the filtering at the same time
import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class Filter extends Component {

	// Sets display to false depending on the event that is passed in
	onFilter = (event) => {
		const rockets = this.props.rockets;
		if (event === "All") {
			this.props.onFiltered(rockets.filter(
				(e) => e.display = true));
		} else if (parseInt(event)) {
			this.props.onFiltered(rockets.filter(
				(e) => e.display = e.capacity > parseInt(event)));
		} else {
			this.props.onFiltered(rockets.filter(
				(e) => e.display = e.org === event));
		}
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
		return (
			<div className = "filter-list">	
				<DropdownButton id="typeDropdown" title={this.props.title}>
					{this.createDropdownItems()}
				</DropdownButton>
			</div>
		);
	}
}

export default Filter;