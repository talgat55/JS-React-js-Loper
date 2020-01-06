import React from 'react';
import styled from 'styled-components';
import Form from '../Form/NewsletterForm';
const Newsletter = () => {
    return (
        <NewsletterSection>
            <div className="newsletter_wrapper">
                <div className="newsletter_wrapper-title">
                    Subscribe to our newsletter
                </div>
                <div className="newsletter_wrapper-sub_title">
                    Cras pulvinar mattis nunc sed blandit.
                </div>
                <Form/>
            </div>

        </NewsletterSection>
    );
};
const NewsletterSection = styled.section`
  padding: 100px 0;
  .newsletter_wrapper{
    width: 70%;
    margin: 0 auto;
    text-align: center; 
    &-title{
        font-weight: 500;
        font-size: 	3.2143rem;
        line-height: 67px;  
        margin-bottom: 23px;
    }
    &-sub_title{
        font-weight: 500;
        font-size: 1.2857rem;
        line-height: 27px;  
        color: #776C82;
        margin-bottom: 63px;
    }
  }

`;
export default Newsletter;
