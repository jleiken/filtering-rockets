import React, { Component } from 'react';
import './App.css';
import Sorter from './Sorter';
import Filter from './Filter';
import Grid from './Grid';

const rockets = [
	{name: "Antares", org: "Orbital ATK", capacity: 5000, img: ""},
	{name: "Atlas V", org: "ULA", capacity: 20520, img: ""},
	{name: "Electron", org: "Rocket Lab", capacity: 250, img: ""},
	{name: "Falcon 9", org: "SpaceX", capacity: 22800, img: ""},
	{name: "Falcon Heavy", org: "SpaceX", capacity: 63800, img: ""},
	{name: "BFR", org: "SpaceX", capacity: 100000, img: ""},
	{name: "Pegasus", org: "Orbital ATK", capacity: 443, img: ""},
	{name: "Redstone", org: "US Army", capacity: 2860, img: ""},
	{name: "Saturn I", org: "NASA", capacity: 9070, img: ""},
	{name: "Saturn V", org: "NASA", capacity: 140000, img: ""},
	{name: "Space Shuttle", org: "NASA", capacity: 27500, img: ""},
	{name: "Space Launch System", org: "ULA", capacity: 117934, img: ""},
	{name: "Delta IV", org: "ULA", capacity: 11470, img: ""},
	{name: "Delta IV Heavy", org: "ULA", capacity: 28790, img: ""},
	{name: "Vulcan", org: "ULA", capacity: 34900, img: ""},
	{name: "Taurus", org: "Northrop Grumman", capacity: 1320, img: ""},
	{name: "New Glenn", org: "Blue Origin", capacity: 45000, img: ""}
];

let filters = {};
let sorter = (a, b) => a.name.localeCompare(b.name);

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			filtered_rockets: rockets,
		};
	}
	
	updateList = () => {
		let newFiltered = rockets.sort(sorter);
		for (let key in filters) {
			newFiltered = newFiltered.filter(filters[key]);
		}
		this.setState({filtered_rockets: newFiltered});
	}

	registerSorter = (newSorter) => {
		sorter = newSorter;
		this.updateList();
	}

	registerFilter = (name, filter) => {
		filters[name] = filter;
		this.updateList();
	}

	render() {
		const org_menu = [
			{eventKey: "NASA", display: "NASA"},
			{eventKey: "ULA", display: "ULA"},
			{eventKey: "SpaceX", display: "SpaceX"},
		];
		const capacity_menu = [
			{eventKey: "500", display: "< 500 kg"},
			{eventKey: "10000", display: "< 10000 kg"},
			{eventKey: "50000", display: "< 50000 kg"}
		];
		return (
			<div className="App">
				<h1>American Rockets</h1>
				<div className="row">
					<Filter registerFilter={this.registerFilter} 
						items={org_menu} title={"Filter by organization"} />
					<Filter registerFilter={this.registerFilter} 
						items={capacity_menu} title={"Filter by payload capacity"} />
					<Sorter registerSorter={this.registerSorter} />
					<Filter registerFilter={this.registerFilter} title={"Search"} />
				</div>
				<Grid items={this.state.filtered_rockets} />
			</div>
		);
	}
}

export default App;
