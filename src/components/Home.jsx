import React from 'react'
import Section from "./Section"
import AboutUsArea from './AboutUs'
import SliderOneArea from './SliderOnArea'
import OurProducts from './OurProducts'
import LatestProducts from './LatestPRoducts'
import SmallBanner from './SmallBanner'

const Home = () => {
    return (
        <div>
            <Section />
            <AboutUsArea />
            <SliderOneArea />
            <OurProducts />
            <SmallBanner />
            <LatestProducts />
        </div>
    )
}

export default Home