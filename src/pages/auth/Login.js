import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Landing from '../../assets/images/landing.png'
import logo from '../../assets/images/logo.png'
import LoginComponent from './LoginComponent'
import Register from './Register'
import { AiFillGithub, AiOutlineFire } from "react-icons/ai";
import { FaReact } from "react-icons/fa";

function Login() {

  const [user, setUser] = useState(false)

  return (
    <LoginBlocck>
      <Nav>
        <Logo src={logo} alt='Logo' width={50} />
        <Title>TASK MANAGER</Title>
        <NavRigth>
          <Button onClick={() => setUser(!user)}>
            {user ?
              'Iniciar Sesion'
              :
              'Crear Cuenta'
            }
          </Button>
        </NavRigth>
      </Nav>

      <Block>
        <Auth>
          {user ?
            <Register />
            :
            <LoginComponent />
          }
        </Auth>
        <App>
          <Image src={Landing} alt='landing' />
        </App>
      </Block>

      <Footer>
        <FooterP>
          <a href='https://github.com/emepuchades'> <AiFillGithub /> eme puchades </a>|
          <FaReact /> React + Firebase |
          <AiOutlineFire />Task manager </FooterP>
      </Footer>

    </LoginBlocck>
  )
}

const Block = styled.div`
  display: flex;
  flex-direction: row;
  height: 87vh;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
const LoginBlocck = styled.div`

`

const Image = styled.img`
  position: absolute;
  right: 0;
`

const Button = styled.div`
  cursor: default;
  border: 1px solid black;
  padding: 8px;
  font-weight: bolder;
  font-size: 16px;
  border-radius: 5px;
`

const Title = styled.p`
  margin-left: 20px;
  font-size: 20px;
  font-weight: bolder;
`
const Logo = styled.img`
  margin-left: 20px;
`

const NavRigth = styled.div`
  position: absolute;
  right: 50px;
`

const Nav = styled.div`
  width: 100%;
  background-color: #ffffff;
  height: 64px;
  border-bottom: 1px solid #f1f1f1;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Footer = styled.div`
  width: 100%;
  background-color: #FDFCDC;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const FooterP = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin : 0px 10px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;
  }
`

const Auth = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  height: 100%;
`

const App = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #3B79D3;
  height: 100%;
`

export default Login