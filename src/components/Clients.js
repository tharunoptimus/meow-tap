import "./css/Client.css"
import Image1 from "./images/client1.png"
import Image2 from "./images/client2.png"
import Image3 from "./images/client3.png"
import Image4 from "./images/client4.png"

const Client = () => {
	return (
		<div className="clientsDiv">
			<p className="clientsTitle">Our Clients</p>
			<div className="container">
				<div class="photobanner">
					<img src={Image1} alt="Client Logo" />
					<img src={Image2} alt="Client Logo" />
					<img src={Image3} alt="Client Logo" />
					<img src={Image4} alt="Client Logo" />
					<img src={Image1} alt="Client Logo" />
					<img src={Image2} alt="Client Logo" />
					<img src={Image3} alt="Client Logo" />
					<img src={Image4} alt="Client Logo" />
					<img src={Image1} alt="Client Logo" />
					<img src={Image2} alt="Client Logo" />
					<img src={Image3} alt="Client Logo" />
					<img src={Image4} alt="Client Logo" />
				</div>
			</div>
		</div>
	)
}

export default Client