import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from "../App";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png';
import { BsHouse, BsHeart, BsCollection, BsPeople, BsGear, BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";

function NavLeft() {
  const { changeExpand, expand } = useContext(AppContext);

  return (
    <Nav className={expand ? 'expand' : ''}>
      <MenuTop>
        <Image src={logo} alt="Logo" />
        <Arrow onClick={() => changeExpand()}>
          {expand ?
            <BsArrowBarLeft className='icon-sccore' />
            :
            <BsArrowBarRight className='icon-sccore' />
          }
        </Arrow>
      </MenuTop>
      <Menu>
        <Li>
          <BsHouse className="icon-search" />
          <Link to="/"> <Text>Inicio</Text> </Link>
        </Li>
        <Li>
          <BsCollection className="icon-search" />
          <Link to="/"> <Text>Tableros</Text> </Link>
        </Li>
        <Li>
          <BsHeart className="icon-search" />
          <Text>Favoritos</Text>
        </Li>
        <Li>
          <BsPeople className="icon-search" />
          <Text>Miembros</Text>
        </Li>
        <Li>
          <BsGear className="icon-search" />
          <Text>Configuración</Text>
        </Li>
      </Menu>
    </Nav>
  )
}

const Nav = styled.nav`
  position: absolute;
  float: left;
  background: #ffffff;
  height: 100vh;
  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: #E6E6EA;
  transition: all 0.2s linear 0s;
  width: 86px;
  min-width: 86px;
  color: black;
  &.expand {
    position: relative;
    margin-right: 50px;
    width: 230px;
    min-width: 230px;
    .icon-sccore {
      display: inline-block;
    }
  }
  :hover {
    width: 230px;
    min-width: 230px;
    cursor: default;
    .icon-sccore {
      display: inline-block;
    }
  }
`;

const Image = styled.img`
  padding: 28px;
  height: 40px;
  width: 40px;
`;

const Menu = styled.div`
`;

const MenuTop = styled.div`
  .icon-sccore {
    position: absolute;
    right: 0;
    padding: 28px;
    display: none;
  }
`;

const Li = styled.div`
  display: flex;
  overflow: hidden;
  padding: 10px 20px;
  .icon-search{
    overflow: visible;
    width: 24px;
    height: 24px;
    padding: 10px;
  }
  :hover {
    color: #3169F6;
    border-right-width: 2px;
    border-right-style: solid;
    border-left-color: #3169F6;
  }
  a {
    text-decoration: none;
    color: black;
    :hover {
      color: #3169F6;
    }
  }
`;
const Text = styled.div`
  margin-left: 30px;
  padding: 12px 5px;
`;

const Arrow = styled.a`
`;

export default NavLeft