import React from 'react';
import styled from 'styled-components';

// interfaces
interface Props {
  last?: boolean;
}

// styles
const Main = styled.main`
  margin-left: 20px;
`;
const Paragraph = styled.p<Props>`
  margin: 20px 0;
  padding-bottom: ${({ last }) => (last ? '20px' : 'none')};
  border-bottom: ${({ last }) => (last ? '1px solid red' : 'none')};
`;

const About: React.FC = () => {
  return (
    <Main>
      <h2>About</h2>

      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, officiis
        ipsum culpa assumenda provident error?
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, officiis
        ipsum culpa assumenda provident error?
      </Paragraph>
      <Paragraph last>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, officiis
        ipsum culpa assumenda provident error?
      </Paragraph>
    </Main>
  );
};

export default About;
