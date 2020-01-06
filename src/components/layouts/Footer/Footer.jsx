import React from 'react';
import styled from 'styled-components';
const Footer = () => {
    return (
        <FooterBlock>
            <div className="container-wrapper">
                © 2019 Lopper by mariuszdaniel. All right reserved.
            </div>
        </FooterBlock>
    )
};
const FooterBlock = styled.footer`
  padding: 40px 0;
  background-color: var(--text-alt-color-lilac);
  text-align: center;
  color: var(--text-white);
`;
export default Footer;