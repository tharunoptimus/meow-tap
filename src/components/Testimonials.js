import "./css/Testimonials.css"
import First from "./Testimonials/first"
import Second from "./Testimonials/second"
import Third from "./Testimonials/third"

const Testimonials = () => {
	return (
		<div className="testimonials">
			<p className="testimonialsTitle">TESTIMONIALS</p>
			<div className="testimonialsContainer">
				<First />
				<Second />
				<Third />
			</div>
			<div style={{ height: "5rem" }}></div>
		</div>
	)
}

export default Testimonials