import React from 'react';
import Header from '../layouts/Header/Header';
import HomeSlider from '../layouts/Sliders/HomeSlider';
import IntroBlock from '../layouts/IntroBlock/IntroBlock';
import BenefitsBlock from '../layouts/BenefitsBlock/BenefitsBlock';
import WhatWeDoBlock from '../layouts/WhatWeDoBlock/WhatWeDoBlock';
import NewsletterBlock from '../layouts/NewsletterBlock/NewsletterBlock';
import Footer from '../layouts/Footer/Footer';

import styled from 'styled-components';
const  Home = ()  =>{
    return (
        <>
            <Header/>
            <MainHeading>Loper Home page</MainHeading>
            <HomeSlider/>
            <IntroBlock/>
            <BenefitsBlock/>
            <WhatWeDoBlock/>
            <NewsletterBlock/>
            <Footer/>
        </>
    );
};
const MainHeading = styled.h1`
   height: 0;
   padding: 0;
   margin: 0;
   overflow: hidden;
   
`;

export default Home;
