import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const Button = ({link, children}) => {
    return (
        <Link href={link}>
            {children}
        </Link>
    );
};
Button.propTypes = {
    link: PropTypes.string,
    children: PropTypes.string,
};

const Link = styled.a`
    text-decoration: none;
    color: var(--text-white);
    display: inline-block;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 	0.8125rem;
    padding: 15px 33px;
    border-radius: 36px;
    background-color: var(--var-hover);
    transition: all .3s;
    &:hover{
      color: #fff;
      background-color: var(--text-color);
    }
`;
export default Button;