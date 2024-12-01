// src/App.jsx
import { DiscordContextProvider } from '../hooks/useDiscordSdk';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import routing components
import { TierList } from './components/TierList.jsx'
import Home from './components/Home.jsx'
import AddTierList from './components/AddTierList.jsx' // TierList component

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
		<DiscordContextProvider authenticate scope={['identify', 'guilds']}>
			<Router>
				<Routes>
					{/* Route to the home page where all tier lists are displayed */}
					<Route path="/" element={<Home />} />
					<Route path="/add-tierlist" element={<AddTierList />} />
					{/* Dynamic route to view individual tier lists */}
					<Route path="/tierlist/:id" element={<TierList />} />
				</Routes>
			</Router>
		</DiscordContextProvider>
	);
}
