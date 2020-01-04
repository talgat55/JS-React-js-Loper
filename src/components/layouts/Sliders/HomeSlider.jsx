import React from 'react';
import HomeSlide from '../../../images/home-slide.jpg';
import styled from 'styled-components';
import Arrow from '../../../images/Arrow.png';
import ScrollBottom from '../../../images/Scroll-bottom.png';

const HomeSlider = () => {

    return (
        <Section
            className="home_slider_section">
            <div className="container-wrapper">
                <div className="home_slider_section-content">
                    <div className="home_slider_section-first">
                        <div className="home_slider_section-first--sub_title">
                            What we do?
                        </div>
                        <div className="home_slider_section-first--title">
                            We grow
                            <span>great business</span>
                        </div>
                        <div  className="home_slider_section-first--bottom_title">
                            <p>Velit laoreet id donec ultrices. Ut lectus arcu bibendum varius.</p>
                            <div>
                                <img src={Arrow} alt="Arrow"/>
                            </div>
                        </div>

                    </div>
                    <div className="home_slider_section-second">
                        <p>
                            Scroll to see more
                        </p>
                        <img src={ScrollBottom} alt="Arrow"/>
                    </div>
                </div>
            </div>
        </Section>
    );
};
const Section = styled.section`
   height: 828px;
   background-image: url(${HomeSlide});
   background-size: cover!important;
   display: flex;
   width: 100%;
   align-items: center;
   .home_slider_section{ 
      &-content{
          position: relative;
          z-index: 2; 
          display: flex;
          justify-content: space-between;
      }
      &-first{
        color: #FCFCFC;
            &--sub_title{
              letter-spacing: 4px;
              text-transform: uppercase; 
              font-weight: 800; 
            }
            &--bottom_title{ 
              font-size: 1.125rem;
              display: flex;
              align-items: center;
              padding: 29px 39px; 
              position: relative;
              width: 85%;
              margin-top: 75px;
              ::after{
                content: "";
                display: block;
                position: absolute;
                width: 200%;
                height: 100%;
                border: 1px solid rgba(255, 255, 255, 0.25);
                left: -100%;
                top: 0;
                
              }
              p{
                margin: 0 45px 0 0;
              }
            } 
            &--title{
                font-weight: 900;
                font-size: 6.1875rem;
                span{
                  color: var(--var-hover);
                  display: block;
                } 
            }
      } 
       &-second{
       color: #fff;
        p{
          writing-mode: vertical-rl;
          margin: 0 0 30px 2px;
          letter-spacing: 6px;
          text-transform: uppercase;
        }
        
       }
   }

   
`;
export default HomeSlider;