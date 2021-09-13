import "./css/Service.css"
import ServiceItem from "./ServiceItem"


const Service = () => {
    return (
        <div className="services">
            <p>One Tap Multiple Service</p>
            <div className="services-container">
                <div className="service-item-container">
                    <ServiceItem id={'email'}/>
                    <ServiceItem id={'dialer'}/>
                    <ServiceItem id={'sms'}/>
                    <ServiceItem id={'social'}/>
                </div>
            </div>
        </div>
    );
}

export default Service;
