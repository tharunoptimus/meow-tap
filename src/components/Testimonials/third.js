import quote from "../svgs/testimony/quote.svg"
import third from "../svgs/testimony/third.svg"
import "../css/Testimony.css"

const Testimonial = () => {
	return (
		<div className="testimonial">
			<div className="hiddenImageHolder">
				<div className="testimonialImageHolder">
					<img src={third} alt="Rituraj Sinha" />
				</div>
			</div>
			<div className="testimonialBody">
				<div className="testimonialTextContainer">
					<div className="testimonyQuote">
						<div className="testimonyQuoteDiv">
							<img src={quote} alt="quote" />
						</div>
					</div>
					<div className="testimonialText">
						<p>
							Meow Man's Conversational AI makes it easy for
							us to share right information to the right people at
							the right time based on their intent, and it makes
							the whole customers sales and support experience
							simple and super fast. It's helped our delivery to
							make competitive advantage and the brand experience
							we were striving for.
						</p>
					</div>
				</div>
				<div className="testimonyName">
					<p>Alex</p>
				</div>
				<div className="testimonyStatus">
					<p>Bull International</p>
				</div>
			</div>
		</div>
	)
}

export default Testimonial