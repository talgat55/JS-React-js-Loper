import React from 'react';
import styled from 'styled-components';
import Button from "../Button/Button";
import BgImage from '../../../images/benefits-img.png';
const BenefitsBlock = () => {
    return (
        <BenefitsSection className="benefits_section">
            <div className="container-wrapper">
                <div className="benefits_section-first_block">
                    <div className="benefits_section-first_block-sub_title">
                        Benefits
                    </div>
                    <h2 className="benefits_section-first_block-title">
                        Shaping the future
                    </h2>
                    <div className="benefits_section-first_block-after_title">
                        Eget nunc scelerisque viverra mauris in aliquam. Dignissim sodales ut eu sem integer vitae.
                        Libero nunc consequat interdum varius.
                    </div>
                    <div className="benefits_section-first_block-text">
                        Magna sit amet purus gravida. Sit amet porttitor eget dolor morbi non.
                        <br/>
                        <br/>
                        Lectus vestibulum mattis ullamcorper velit sed ullamcorper.
                        <br/><br/>
                        Diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Dui faucibus in ornare quam viverra.
                        <br/> <br/>
                        Posuere ac ut consequat semper viverra.
                    </div>
                    <Button
                        link="#"
                    >
                        Learn more
                    </Button>
                </div>
                <div className="benefits_section-second_block">
                    <img src={BgImage} alt="Image" />
                </div>
            </div>
        </BenefitsSection>
    );
};
const BenefitsSection = styled.section`
  margin-top: 108px;
  margin-bottom: 90px;
  .container-wrapper{
    display: flex;
      align-items: center;
  }
  .benefits_section{
    &-first_block{
      width: 50%;
      
      &-sub_title{
        font-weight: 800;
        font-size: 	0.8571rem;
        line-height: 26px;
        letter-spacing: 6px;
        text-transform: uppercase; 
        color: var(--var-hover);
        margin-bottom: 11px;
        
      }
      &-title{
        font-weight: 500;
        font-size: 3.2143rem;
        line-height: 67px;  
        color: var(--text-alt-color-lilac);
        margin-top: 0;
        margin-bottom: 17px;
      }
      
      &-after_title{
        font-weight: 800;
        font-size: 0.8571rem;
        line-height: 29px;
        margin-bottom: 71px;
      }
       &-text{
        margin-bottom: 45px;
       }
    }

    &-second_block{
      width: 50%;
    }
  }
`;
export default BenefitsBlock;