import React from 'react'
import styled from 'styled-components'
import logo from '../assets/images/logo.png';

function NavLeft() {
  return (
    <Nav>
        <Image src={logo} alt="Logo"/>
    </Nav>
  )
}

const Nav = styled.nav`
    position: relative;
    float: left;
    background: #ffffff;
    height: 100vh;
    border-right-width: 1px;
    border-right-style: solid;
    border-right-color: #E6E6EA;
    transition: all 0.2s linear 0s;
    width: 86px;
    min-width: 86px;
    :hover {
      width: 200px;
      min-width: 200px;
    }
`;

const Image = styled.img`
    padding: 28px;
    height: 40px;
    width: 40px;
`;



export default NavLeft