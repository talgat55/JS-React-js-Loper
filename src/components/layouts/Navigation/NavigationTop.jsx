import React from 'react';
import styled from 'styled-components';

const NavigationTop = () => {
    const LINKS = [
        {
            url: '/',
            title: 'Home'
        },
        {
            url: '/services',
            title: 'Services'
        },
        {
            url: '/works',
            title: 'Work'
        },
        {
            url: '/about',
            title: 'About'
        },

    ];
    return (
        <Nav className="navigation">
            <ul className="navigation-list">
                {LINKS.map((item, index) => (
                    <li id={index} className="navigation-list--item">
                        <a href={item.url} className="navigation-list--link">
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </Nav>
    );
};
const Nav = styled.nav` 
   display: flex;
   .navigation-list{
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        
        &--item{
          list-style: none; 
        }
        &--link{
          color: #fff;
          text-decoration: none;
          font-size: 0.875rem;
          margin-right: 54px;
          transition: all .3s;
          &:hover{
            color: var(--var-hover);
          }
        }
        
        
   }
   
`;


export default NavigationTop;