import Typewriter from "typewriter-effect"
import "./css/Banner.css"

const Banner = () => {
	return (
		<div className="bannerHolder">
			<p>
            <Typewriter
				onInit={(typewriter) => {
					typewriter
						.typeString("One App for every need.")
						.start()
				}}
			/>
            </p>
		</div>
	)
}

export default Banner