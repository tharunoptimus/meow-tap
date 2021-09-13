import React from 'react';
import './css/AppFeatures.css'
import phone from "./images/phone.jpg"

const AppFeaturesItem = () => {
    return (
        <div className="appFeaturesSliderItem">
            <div className="appFeaturesSliderItemHolder">
                <div className="mobileContainer">
                    <img src={phone} alt="Mobile" />
                </div>
                <div className="randomText">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                </div>
            </div>
        </div>
    );
}

export default AppFeaturesItem;
