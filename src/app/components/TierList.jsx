// src/components/TierList.jsx
import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// Fake data generator for tier items
const getTierItems = () => ({
	S: ['Item 1', 'Item 2'],
	A: ['Item 3', 'Item 4', 'Item 5'],
	B: ['Item 6'],
	C: ['Item 7', 'Item 8'],
	F: [],
});

// Function to reorder items in the same tier
const reorder = (list, startIndex, endIndex) => {
	const result = Array.from(list);
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);
	return result;
};

// Function to move items between tiers
const move = (source, destination, droppableSource, droppableDestination) => {
	const sourceClone = Array.from(source);
	const destClone = Array.from(destination);
	const [removed] = sourceClone.splice(droppableSource.index, 1);
	destClone.splice(droppableDestination.index, 0, removed);

	return {
		source: sourceClone,
		destination: destClone,
	};
};

const grid = 8;

// Styles for items and list
const getItemStyle = (isDragging, draggableStyle) => ({
	userSelect: 'none',
	padding: grid * 2,
	margin: `0 ${grid}px 0 0`,
	background: isDragging ? 'lightgreen' : 'lightgrey',
	...draggableStyle,
});

const getListStyle = isDraggingOver => ({
	background: isDraggingOver ? 'lightblue' : 'lightgrey',
	padding: grid,
	width: 250,
	minHeight: 100,
});

// TierList Component
class TierList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tiers: getTierItems(),
		};
		this.onDragEnd = this.onDragEnd.bind(this);
	}

	onDragEnd(result) {
		const { source, destination } = result;

		// Drop outside the list or in the same position
		if (!destination) {
			return;
		}

		const { source: sourceTier, destination: destinationTier } = result;

		// Handle moving within the same tier
		if (sourceTier === destinationTier) {
			const items = reorder(
				this.state.tiers[sourceTier],
				source.index,
				destination.index
			);
			const tiers = { ...this.state.tiers, [sourceTier]: items };
			this.setState({ tiers });
		} else {
			// Move items between different tiers
			const { source: sourceItems, destination: destinationItems } = move(
				this.state.tiers[sourceTier],
				this.state.tiers[destinationTier],
				source,
				destination
			);
			const tiers = {
				...this.state.tiers,
				[sourceTier]: sourceItems,
				[destinationTier]: destinationItems,
			};
			this.setState({ tiers });
		}
	}

	render() {
		const { tiers } = this.state;
		return (
			<DragDropContext onDragEnd={this.onDragEnd}>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					{Object.keys(tiers).map(tier => (
						<Droppable key={tier} droppableId={tier}>
							{(provided, snapshot) => (
								<div
									{...provided.droppableProps}
									ref={provided.innerRef}
									style={{
										...getListStyle(snapshot.isDraggingOver),
										backgroundColor: this.getTierColor(tier),
									}}
								>
									<h3>{tier}</h3>
									{tiers[tier].map((item, index) => (
										<Draggable key={item} draggableId={item} index={index}>
											{(provided, snapshot) => (
												<div
													ref={provided.innerRef}
													{...provided.draggableProps}
													{...provided.dragHandleProps}
													style={getItemStyle(
														snapshot.isDragging,
														provided.draggableProps.style
													)}
												>
													{item}
												</div>
											)}
										</Draggable>
									))}
									{provided.placeholder}
								</div>
							)}
						</Droppable>
					))}
				</div>
			</DragDropContext>
		);
	}

	// Helper function to get background color for each tier
	getTierColor(tier) {
		switch (tier) {
			case 'S':
				return '#ff7f7f';
			case 'A':
				return '#ffbf7f';
			case 'B':
				return '#ffdf7f';
			case 'C':
				return '#ffff7f';
			case 'F':
				return '#bfff7f';
			default:
				return 'transparent';
		}
	}
}

export default TierList;
