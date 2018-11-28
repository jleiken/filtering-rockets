import React, { Component } from 'react';
import './App.css';
import FilteredList from './FilteredList';

const rockets = [
	{name: "Antares", org: "Orbital ATK", capacity: 5000},
	{name: "Atlas V", org: "ULA", capacity: 20520},
	{name: "Electron", org: "Rocket Lab", capacity: 250},
	{name: "Falcon 9", org: "SpaceX", capacity: 22800},
	{name: "Falcon Heavy", org: "SpaceX", capacity: 63800},
	{name: "BFR", org: "SpaceX", capacity: 100000},
	{name: "Pegasus", org: "Orbital ATK", capacity: 443},
	{name: "Redstone", org: "US Army", capacity: 2860},
	{name: "Saturn I", org: "NASA", capacity: 9070},
	{name: "Saturn V", org: "NASA", capacity: 140000},
	{name: "Space Shuttle", org: "NASA", capacity: 27500},
	{name: "Space Launch System", org: "ULA", capacity: 117934},
	{name: "Delta IV", org: "ULA", capacity: 11470},
	{name: "Delta IV Heavy", org: "ULA", capacity: 28790},
	{name: "Vulcan", org: "ULA", capacity: 34900},
	{name: "Taurus", org: "Northrop Grumman", capacity: 1320},
	{name: "New Glenn", org: "Blue Origin", capacity: 45000}
];

class App extends Component {
	render() {
		return (
			<div className="App">
				<FilteredList items={rockets} />
			</div>
		);
	}
}

export default App;
