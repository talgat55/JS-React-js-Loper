import React from 'react';
import HomeSlide from '../../../images/home-slide.jpg';
import styled from 'styled-components';

const HomeSlider = () => {

    return (
        <Section
            className="home-slider-section" >

        </Section>
    );
};
const Section = styled.section`
   height: 828px;
   background-image: url(${HomeSlide});
   background-size: cover!important;
`;
export default HomeSlider;