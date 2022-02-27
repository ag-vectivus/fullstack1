import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
  text-transform: uppercase;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const NavListItem = styled.li`
  list-style-type: none;
  margin-left: 20px;
  color: #777;
  font-weight: 300;
`;

const NavHeading = styled.h1`
  font-size: 3em;
`;

const NavParagraph = styled.p`
  color: #777;
  font-weight: 300;
`;

const Navbar: React.FC = () => {
  return (
    <Nav>
      <div>
        <Link to="/">
          <NavHeading>Blog Ninja</NavHeading>
        </Link>
        <NavParagraph>A Net Ninja Site</NavParagraph>
      </div>
      <NavList>
        <NavListItem>
          <Link to="/">Blogs</Link>
        </NavListItem>
        <NavListItem>
          <Link to="/about">About</Link>
        </NavListItem>
        <NavListItem>
          <Link to="/create">New Blog</Link>
        </NavListItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;
