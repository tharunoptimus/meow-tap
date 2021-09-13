import "./css/ServiceItem.css"
import email from "./svgs/email.svg"
import dialer from "./svgs/dialer.svg"
import sms from "./svgs/sms.svg"
import social from "./svgs/social.svg"

const ServiceItem = ({id}) => {

    let renderText = (id, req) => {
        let value = {}

        if(id === "email"){
            value.icon = email
            value.text = "Email"
        }
        else if (id === "dialer"){
            value.icon = dialer
            value.text = "Dialer"
        }
        else if (id === "sms"){
            value.icon = sms
            value.text = "SMS"
        }
        else if (id === "social"){
            value.icon = social
            value.text = "Social"
        }

        return req === "icon" ? value.icon : value.text
    }

    return (
        <div className="service-item">
            <div className="service-item-icon">
                <img src={renderText(id, "icon")} alt={renderText(id, "text")}/>
            </div>
            <div className="service-item-text">
                <p>{renderText(id, "text")}</p>
            </div>
            <div className="service-item-description">
                <p> lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
        </div>
    );
}

export default ServiceItem;