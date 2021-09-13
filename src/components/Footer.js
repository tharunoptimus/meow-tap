import Socials from "./Socials"
import "./css/Footer.css"

const Footer = () => {
	return (
		<div className="footerContainer">
			<div className="aboutSection">
				<p className="footerName">DEMAND TAP</p>
				<p className="footerText">
					lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>
			</div>
			<div className="contactSection">
				<p className="followUs">FOLLOW US ON</p>
				<Socials />
				<p className="endFooterText">
					lorem ipsum dolor sit amet, consectetur adipiscing
				</p>
			</div>
		</div>
	)
}

export default Footer