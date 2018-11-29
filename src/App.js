import React, { Component } from 'react';
import './App.css';
import Sorter from './Sorter';
import Filter from './Filter';
import Grid from './Grid';

const rockets = [
	{name: "Antares", org: "Orbital ATK", capacity: 5000, img: "images/antares.jpg"},
	{name: "Atlas V", org: "ULA", capacity: 20520, img: "images/atlasv.jpg"},
	{name: "Electron", org: "Rocket Lab", capacity: 250, img: "images/electron.jpg"},
	{name: "Falcon 9", org: "SpaceX", capacity: 22800, img: "images/falcon9.jpg"},
	{name: "Falcon Heavy", org: "SpaceX", capacity: 63800, img: "images/falconheavy.jpg"},
	{name: "BFR", org: "SpaceX", capacity: 100000, img: "images/bfr.jpg"},
	{name: "Pegasus", org: "Orbital ATK", capacity: 443, img: "images/pegasus.jpg"},
	{name: "Redstone", org: "US Army", capacity: 2860, img: "images/redstone.jpg"},
	{name: "Saturn I", org: "NASA", capacity: 9070, img: "images/saturni.jpg"},
	{name: "Saturn V", org: "NASA", capacity: 140000, img: "images/saturnv.jpg"},
	{name: "Space Shuttle", org: "NASA", capacity: 27500, img: "images/spaceshuttle.png"},
	{name: "Space Launch System", org: "ULA", capacity: 117934, img: "images/sls.jpg"},
	{name: "Delta IV", org: "ULA", capacity: 11470, img: "images/deltaiv.jpg"},
	{name: "Delta IV Heavy", org: "ULA", capacity: 28790, img: "images/deltaivheavy.jpg"},
	{name: "Vulcan", org: "ULA", capacity: 34900, img: "images/vulcan.jpg"},
	{name: "Taurus", org: "Northrop Grumman", capacity: 1320, img: "images/taurus.jpg"},
	{name: "New Glenn", org: "Blue Origin", capacity: 45000, img: "images/newglenn.jpg"}
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
				<br></br>
				<Grid items={this.state.filtered_rockets} />
			</div>
		);
	}
}

export default App;
