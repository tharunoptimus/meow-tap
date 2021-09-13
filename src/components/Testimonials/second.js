import second from "../svgs/testimony/second.svg"
import quote from "../svgs/testimony/quote.svg"
import "../css/Testimony.css"

const Testimonial = () => {
	return (
		<div className="testimonial">
			<div className="hiddenImageHolder">
				<div className="testimonialImageHolder">
					<img src={second} alt="Rituraj Sinha" />
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
							As an overall system, Freshdigital's Conversational
							AI does a great job. I can see it being a valuable
							tool at multiple leves of our organization, not just
							from a sales and support prespectives. It helps to
							improve the initial website visit for any lead
							prospect, or existing customer.
						</p>
					</div>
				</div>
				<div className="testimonyName">
					<p>Mithun Patil</p>
				</div>
				<div className="testimonyStatus">
					<p>Digital marketing Head, Mybike, bz</p>
				</div>
			</div>
		</div>
	)
}

export default Testimonial