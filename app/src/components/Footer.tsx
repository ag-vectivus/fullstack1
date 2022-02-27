import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  color: #777;
  text-align: center;
  margin: 80px auto 20px;
`;

const Footer: React.FC = () => {
  return <FooterWrapper>Copyright &copy; Blog Ninja 2021</FooterWrapper>;
};

export default Footer;
