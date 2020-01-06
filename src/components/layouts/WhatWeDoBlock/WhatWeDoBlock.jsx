import React from 'react';
import styled from 'styled-components';

const WhatWeDoBlock = () => {

    const DATA = [
        {
            number: '01',
            title: 'Research',
            text: 'Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat pretium  nibh ipsum consequat nisl vel pretium.'
        },
        {
            number: '02',
            title: 'Marketing',
            text: 'Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat pretium  nibh ipsum consequat nisl vel pretium.'
        },
        {
            number: '03',
            title: 'Results',
            text: 'Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat pretium  nibh ipsum consequat nisl vel pretium.'
        },

    ];
    return (
        <WhatWeDoBlockSection className="what_we_do">
            <div className="container-wrapper">
                <div className="what_we_do-sub_title">
                    What we do
                </div>
                <div className="what_we_do-text">
                    Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the
                    stars had ceased to twinkle.
                </div>
                <ul className="what_we_do-list_items">
                    {
                        DATA.map(item => (
                            <li className="what_we_do-list_items-item">
                                <div className="what_we_do-list_items-item-number">
                                    {item.number}
                                </div>
                                <div className="what_we_do-list_items-item-title">
                                    {item.title}
                                </div>
                                <div className="what_we_do-list_items-item-text">
                                    {item.text}
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </WhatWeDoBlockSection>
    );
};
const WhatWeDoBlockSection = styled.section`
  padding-top: 253px;
  background-color: var(--text-alt-color-lilac);
  padding-bottom: 250px;
  .what_we_do{
    &-sub_title{
      font-weight: 800;
      font-size: 0.8571rem;
      line-height: 26px;
      letter-spacing: 6px;
      color: var(--var-hover);
      margin-bottom: 12px;
    }
    &-text{
      font-weight: 500;
      font-size: 1.9286rem;
      line-height: 40px;
      color: var(--text-white);
      margin-bottom: 60px;
      width: 60%;
    }
    &-list_items{
      margin: 0 -15px;
      padding: 0;
      display: flex;
      align-items: center;
      &-item{
        list-style: none;
        margin: 0 15px;
        color: var(--text-white);
        background-color: var(--var-hover);
        padding: 72px 36px;
        &-number{
          font-weight: 800;
          font-size: 1.2857rem;
          line-height: 37px;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        &-title{
          font-weight: 500;
          font-size:  1.9286rem;
          line-height: 40px;
          margin-bottom: 13px;
        }
        &-text{
          font-size: 1.1429rem;
          line-height: 26px;
        }      
      }
    }
    
    
  }
  

`;
export default WhatWeDoBlock;