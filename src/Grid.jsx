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

		if (items.length === 0) {
			return <h3>No items matched the given criteria!</h3>;
		} else {
			return <div className="grid-wrapper">{items}</div>;
		}
	}

	render() {
		return this.renderGrid();
	}
}

export default Grid; 