import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Landing from '../../assets/images/landing3.png'
import logo from '../../assets/images/logo.png'
import LoginComponent from './LoginComponent'
import Register from './Register'
import { AiFillGithub, AiOutlineFire } from "react-icons/ai";
import { FaReact } from "react-icons/fa";

function Login() {

  const [user, setUser] = useState(false)

  return (
    <LoginBlocck>
      <Block>
        <Auth>
          <Nav>
            <Logo src={logo} alt='Logo' />
            <Title>Task Manager</Title>
          </Nav>

          <AuthContent>
            {user ?
              <Register />
              :
              <LoginComponent />
            }
            <TextSwitch>
              {user ? '¿Ya tienes cuenta?' : '¿No tienes cuenta?'}
              <Button onClick={() => setUser(!user)}>
                {user ?
                  'Inicia sesión'
                  :
                  'Crea una'
                }
              </Button>
            </TextSwitch>
          </AuthContent>

          <Footer>
            <FooterP>
              <a href='https://github.com/emepuchades'>
                <AiFillGithub /> eme puchades
              </a>
              <span>·</span>
              <FaReact /> React + Firebase
              <span>·</span>
              <AiOutlineFire /> Task manager
            </FooterP>
          </Footer>
        </Auth>

        <App>
          <TextApp>
            <TitleApp>Tus proyectos, ordenados en tableros.</TitleApp>
            <Paragraph>
              Crea un proyecto, reparte las tareas en listas y muévelas
              arrastrando de una columna a otra.
            </Paragraph>
          </TextApp>
          <Image src={Landing} alt='Tablero de Task Manager' />
        </App>
      </Block>
    </LoginBlocck>
  )
}

const LoginBlocck = styled.div`
  display: flex;
  min-height: 100vh;
  padding: var(--gap-panel);
  background-color: var(--color-background);
`

const Block = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  gap: var(--gap-panel);
`

const Auth = styled.div`
  display: flex;
  flex-direction: column;
  width: 44%;
  min-width: 440px;
  padding: 28px 40px 24px;
  background-color: var(--color-surface);
  border-radius: var(--radius-panel);

  @media (max-width: 900px) {
    width: 100%;
    min-width: 0;
    padding: 24px 20px 20px;
  }
`

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Logo = styled.img`
  width: 40px;
`

const Title = styled.p`
  margin: 0 0 0 12px;
  font-size: 16px;
  font-weight: 700;
`

const AuthContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`

const TextSwitch = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 28px;
  font-size: 14.5px;
  color: var(--color-text-muted);
`

const Button = styled.div`
  font-weight: 600;
  color: var(--color-primary);
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`

const Footer = styled.div`
  display: flex;
  justify-content: center;
`
const FooterP = styled.div`
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: var(--color-text-faint);

  span {
    margin: 0 4px;
  }

  a {
    display: flex;
    align-items: center;
    gap: 6px;
    text-decoration: none;
    color: var(--color-text-muted);

    :hover {
      color: var(--color-primary);
    }
  }
`

const App = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding: 48px 0 48px 56px;
  overflow: hidden;

  @media (max-width: 900px) {
    display: none;
  }
`

const TextApp = styled.div`
  max-width: 460px;
  margin-bottom: 36px;
`

const TitleApp = styled.p`
  margin: 0 0 12px;
  font-size: 34px;
  font-weight: 700;
  line-height: 1.15;
`

const Paragraph = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.5;
  color: var(--color-text-muted);
`

const Image = styled.img`
  width: 920px;
  max-width: none;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 24px 48px rgba(27, 34, 53, 0.12);
`

export default Login
