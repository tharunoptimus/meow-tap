import "./css/Socials.css"

import facebook from "./svgs/socials/facebook.svg"
import instagram from "./svgs/socials/instagram.svg"
import twitter from "./svgs/socials/twitter.svg"
import youtube from "./svgs/socials/youtube.svg"

const Socials = () => {
	return (
		<div className="icons">
			<div className="icon">
				<img src={facebook} alt="facebook" />
			</div>
			<div className="icon">
				<img src={instagram} alt="instagram" />
			</div>
			<div className="icon">
				<img src={twitter} alt="twitter" />
			</div>
			<div className="icon">
				<img src={youtube} alt="youtube" />
			</div>
		</div>
	)
}

export default Socials