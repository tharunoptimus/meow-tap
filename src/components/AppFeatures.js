import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css/AppFeatures.css'
import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';
import AppFeaturesItem from './AppFeaturesItem';

const AppFeatures = () => {
    const settings = {
        dots: true,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => {
          return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} />;
        }
    }

    return (
        <div className="slickercontainer">
            <p class="slickerContainerTitle">APP FEATURES</p>
            <Slider {...settings}>
                <AppFeaturesItem />
                <AppFeaturesItem />
                <AppFeaturesItem />
                <AppFeaturesItem />
            </Slider>

            <div style={{height: '4rem'}}></div>
        </div>
        
    )
}

export default AppFeatures;