import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #182848;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: #fff;
    text-decoration: none;
    padding: 10px 15px;
    transition: all 0.3s ease;
    &:hover {
      color: #4b6cb7;
    }
  }
`;

const Navbar = () => (
  <Nav>
    <Logo>My Portfolio</Logo>
    <NavLinks>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#education">Education</a>
      <a href="#contact">Contact</a>
    </NavLinks>
  </Nav>
);

export default Navbar;
