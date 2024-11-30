// src/components/TierList.jsx
import { useEffect, useState } from 'react'
import {
	TierListWrapper,
	TierHeaderItem,
	TiersWrapper,
	TierContent,
	TierListItem,
	TierListItems
} from './TierList.styles'
import { useDiscordSdk } from '../../hooks/useDiscordSdk.jsx'

export const TierList = () => {
	const [tiers] = useState({
		S: ['Item 1', 'Item 2', 'Item 3'],
		A: ['Item 4', 'Item 5'],
		B: ['Item 6'],
		C: [],
		F: ['Item 7']
	})

	const getTierColor = (tier) => {
		switch (tier) {
			case 'S':
				return '#ff7f7f'
			case 'A':
				return '#ffbf7f'
			case 'B':
				return '#ffdf7f'
			case 'C':
				return '#ffff7f'
			case 'F':
				return '#bfff7f'
			default:
				return 'transparent'
		}
	}
	const { authenticated, discordSdk, status } = useDiscordSdk()
	const [channelName, setChannelName] = useState()

	useEffect(() => {
		// Requesting the channel in GDMs (when the guild ID is null) requires
		// the dm_channels.read scope which requires Discord approval.
		if (!authenticated || !discordSdk.channelId || !discordSdk.guildId) {
			return
		}

		// Collect channel info over RPC
		// Enable authentication to see it! (App.jsx)
		discordSdk.commands.getChannel({ channel_id: discordSdk.channelId }).then((channel) => {
			if (channel.name) {
				setChannelName(channel.name)
			}
		})
		console.log(channelName)
	}, [authenticated, discordSdk])

	return (
		<TierListWrapper>
			<h3>{status}</h3>
			<h2>Tier List</h2>
			<TiersWrapper>
				{/* Render tier labels vertically on the left */}
				{Object.keys(tiers).map((tier) => (
					<TierContent key={tier}>
						<TierHeaderItem style={{ backgroundColor: getTierColor(tier) }}>{tier}</TierHeaderItem>
						<TierListItems>
							{tiers[tier].map((item, index) => (
								<TierListItem key={index}>{item}</TierListItem>
							))}
						</TierListItems>
					</TierContent>
				))}
			</TiersWrapper>
		</TierListWrapper>
	)
}
