// src/components/TierList.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get the ID from URL
import {
	TierListWrapper,
	TierHeaderItem,
	TiersWrapper,
	TierContent,
	TierListItem,
	TierListItems
} from './TierList.styles';
import { useDiscordSdk } from '../../hooks/useDiscordSdk.jsx';

export const TierList = () => {
	const { id } = useParams(); // Get the ID from URL parameters
	const [tiers, setTiers] = useState({
		S: ['Item 1', 'Item 2', 'Item 3'],
		A: ['Item 4', 'Item 5'],
		B: ['Item 6'],
		C: [],
		F: ['Item 7']
	});

	const { authenticated, discordSdk, status } = useDiscordSdk();
	const [channelName, setChannelName] = useState();

	useEffect(() => {
		if (!authenticated || !discordSdk.channelId || !discordSdk.guildId) {
			return;
		}

		discordSdk.commands.getChannel({ channel_id: discordSdk.channelId }).then((channel) => {
			if (channel.name) {
				setChannelName(channel.name);
			}
		});
	}, [authenticated, discordSdk]);

	// Handling the drag events
	const handleDragStart = (event, tier, index) => {
		event.dataTransfer.setData('tier', tier);
		event.dataTransfer.setData('index', index);
		event.target.style.opacity = '0.5';
	};

	const handleDragEnd = (event) => {
		event.target.style.opacity = '1';
	};

	const handleDrop = (event, targetTier) => {
		const sourceTier = event.dataTransfer.getData('tier');
		const sourceIndex = event.dataTransfer.getData('index');
		const targetIndex = event.target.dataset.index;

		// Move item from source tier to target tier
		const newTiers = { ...tiers };
		const movedItem = newTiers[sourceTier].splice(sourceIndex, 1)[0];
		newTiers[targetTier].splice(targetIndex, 0, movedItem);
		setTiers(newTiers);
	};

	const handleDragOver = (event) => {
		event.preventDefault();
	};

	return (
		<TierListWrapper>
			<h3>{status}</h3>
			<h2>Tier List #{id}</h2> {/* Display the tier list ID */}
			<TiersWrapper>
				{Object.keys(tiers).map((tier) => (
					<TierContent key={tier}>
						<TierHeaderItem style={{ backgroundColor: getTierColor(tier) }}>
							{tier}
						</TierHeaderItem>
						<TierListItems onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, tier)}>
							{tiers[tier].map((item, index) => (
								<TierListItem
									key={index}
									draggable
									onDragStart={(e) => handleDragStart(e, tier, index)}
									onDragEnd={handleDragEnd}
									data-index={index}
								>
									{item}
								</TierListItem>
							))}
						</TierListItems>
					</TierContent>
				))}
			</TiersWrapper>
		</TierListWrapper>
	);
};

// Function to get tier color (same as before)
const getTierColor = (tier) => {
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
};
