import React, {Component} from 'react';
import { Thumbnail } from 'react-bootstrap';

class Grid extends Component {
	renderGrid() {
		const items = this.props.items.map(item => {
			return (
				<Thumbnail src={item.img} alt={item.name} key={item.name}>
					<h3>{item.name}</h3>
					<p>Builder: {item.org}</p>
					<p>Capacity: {item.capacity}kg</p>
				</Thumbnail>
			);
		});

		return items;
	}

	render() {
		return (
			<div className="grid-wrapper">
				{this.renderGrid()}
			</div>
		);
	}
}

export default Grid; 