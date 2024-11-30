// src/App.jsx
import { DiscordContextProvider } from '../hooks/useDiscordSdk';
import './App.css';
import TierList from './components/TierList.jsx'

/**
 * Set `authenticate` to true to enable Discord authentication.
 * You can also set the `scope` prop to request additional permissions.
 *
 * ```
 * <DiscordContextProvider authenticate scope={['identify', 'guilds']}>
 *  <Activity />
 * </DiscordContextProvider>
 * ```
 *
 * Learn more:
 * https://robojs.dev/discord-activities/authentication
 */
export default function App() {
	return (
		<DiscordContextProvider>
			<TierList /> {/* Render the TierList component */}
		</DiscordContextProvider>
	);
}
