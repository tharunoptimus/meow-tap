import Topbar from "./components/Topbar"
import Banner from "./components/Banner"
import Service from "./components/Service"
import AppFeatures from "./components/AppFeatures"
import Testimonials from "./components/Testimonials"
import Personalized from "./components/Personalized"
import Clients from "./components/Clients"
import Footer from "./components/Footer"

import { _success } from 'react-color-log';

function App() {

	let tharunoptimus = "Tharunraj - https://linkedin.com/in/tharunoptimus"
	let krishnan = "Krishnan R - https://www.linkedin.com/in/krishnan-r-54769a177"
	let stringToDisplay = `Developed by ${tharunoptimus} and ${krishnan}`
	_success(stringToDisplay);

	return (
		<>
			<Topbar />
			<Banner />
			<Service />
			<AppFeatures />
			<Testimonials />
			<Personalized />
			<Clients />
			<Footer />
		</>
	)
}

export default App
