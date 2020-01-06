import React from 'react';
import styled from 'styled-components';

const NewsletterForm = () => {
    return(
      <Form method="post">
          <div className="form-group">

                <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    className="input"
                    />

              <button type="submit" className="button button-submit">
                  Subscribe
                  <svg width="27" height="27" viewBox="0 0 27 27" fill="none"  >
                      <circle cx="13.5" cy="13.5" r="13" stroke="#F61067" stroke-opacity="0.5"/>
                      <path d="M17.7911 13.8536C17.9863 13.6583 17.9863 13.3417 17.7911 13.1464L14.6091 9.96447C14.4138 9.7692 14.0972 9.7692 13.902 9.96447C13.7067 10.1597 13.7067 10.4763 13.902 10.6716L16.7304 13.5L13.902 16.3284C13.7067 16.5237 13.7067 16.8403 13.902 17.0355C14.0972 17.2308 14.4138 17.2308 14.6091 17.0355L17.7911 13.8536ZM9.5625 14H17.4375V13H9.5625V14Z" fill="#F61067"/>
                  </svg>
              </button>

          </div>

      </Form>
    );
};
const Form = styled.form`
  width: 400px;
  margin: 0 auto;
  border-bottom: 4px solid #F4F4ED;;
  .form-group{
    display: flex;
    align-items: center;
    .input{
      border: none; 
      padding: 9px 12px;
      display: inline-block;
      color: #9B94A3;
      font-weight: 800;
      font-size: 	1.2857rem; 
      letter-spacing: 4px;
      text-transform: uppercase;
      
    }
    .button-submit{
      display: flex;
      align-items: center;
      font-size: 12.6px;
      line-height: 26px; 
      letter-spacing: 6px;
      text-transform: uppercase;  
      color: var(--var-hover);
      cursor: pointer;
      transition: all .3s;
      svg{
        padding-left: 9px;
      }
      background-color: transparent;
      border: none;
      &:hover{
        opacity: .4;
      }
        
      
    }
  }
    
`;
export  default NewsletterForm;