import first from "../svgs/testimony/first.svg"
import quote from "../svgs/testimony/quote.svg"
import "../css/Testimony.css"

const Testimonial = () => {
	return (
		<div className="testimonial">
			<div className="hiddenImageHolder">
				<div className="testimonialImageHolder">
					<img src={first} alt="Rituraj Sinha" />
				</div>
			</div>
			<div className="testimonialBody">
				<div className="testimonialTextContainer">
					<div className="testimonyQuote">
						<div className="testimonyQuoteDiv">
							<img src={quote} alt="Meow" />
						</div>
					</div>
					<div className="testimonialText">
						<p>
							Freshdigitals, Conversational AI is great for being
							able to engage in a conversationg quickly. It's best
							suited when you're able to lead your customer
							journey through a positive sales experience. Its
							often used by the customers as a resource center for
							everything for their user journeys.
						</p>
					</div>
				</div>
				<div className="testimonyName">
					<p>Rituraj Sinha</p>
				</div>
				<div className="testimonyStatus">
					<p>
						Digital marketing Head, Diamong Star Financial Services
					</p>
				</div>
			</div>
		</div>
	)
}

export default Testimonial