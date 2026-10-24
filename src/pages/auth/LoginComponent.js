import { useState } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'
import { Alert } from './Alert'
import logo from '../../assets/images/logo-google.png'

function LoginComponent() {
    const [user, setUser] = useState({
        email: '',
        password: '',
    })
    const { login, loginWithGoogle, resetPassword } = useAuth()
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault()
        setError('')
        try {
            await login(user.email, user.password)
            navigate('/')
        } catch (error) {
            setError(error.message)
        }
    }

    const handleChange = ({ target: { value, name } }) =>
        setUser({ ...user, [name]: value })

    const handleGoogleSignin = async () => {
        try {
            await loginWithGoogle()
            navigate('/')
        } catch (error) {
            setError(error.message)
        }
    }

    const handleResetPassword = async e => {
        e.preventDefault()
        if (!user.email)
            return setError(
                'Te hemos enviado un email para que restaures la contreaseña'
            )
        try {
            await resetPassword(user.email)
            setError('Te hemos enviado un email! Mira tu correo')
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <Block>
            {error && <Alert message={error} />}
            <Form onSubmit={handleSubmit}>
                <Title>Iniciar sesión</Title>
                <Text className='subtitle'>
                    Entra para seguir con tus tableros.
                </Text>

                <ButtonGoogle type='button' onClick={handleGoogleSignin}>
                    <Image src={logo} alt='Logo' /> <p>Accede con Google</p>
                </ButtonGoogle>

                <Divider>o con tu email</Divider>

                <TextInput> Email</TextInput>
                <Input
                    type='email'
                    name='email'
                    id='email'
                    onChange={handleChange}
                    placeholder='nombre@email.com'
                />
                <TextInput> Contraseña </TextInput>
                <Input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='Tu contraseña'
                    onChange={handleChange}
                />
                <LinkPassword href='#!' onClick={handleResetPassword}>
                    <Text>¿Olvidaste la contraseña?</Text>
                </LinkPassword>

                <Button type='submit'> Iniciar sesión </Button>
            </Form>
        </Block>
    )
}

const Block = styled.div`
    width: 360px;
    max-width: 100%;
`

const Title = styled.p`
    margin: 0 0 6px;
    font-size: 28px;
    font-weight: 700;
    color: var(--color-text);
`
const Text = styled.p`
    margin: 10px 0 22px;
    font-size: 13.5px;
    font-weight: 500;
    color: var(--color-primary);
    &.textpassword {
        width: 100%;
    }
    &.subtitle {
        margin: 0 0 28px;
        font-size: 15px;
        font-weight: 400;
        color: var(--color-text-muted);
    }
`
const Divider = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 22px 0 2px;
    font-size: 13px;
    color: var(--color-text-faint);
    ::before,
    ::after {
        content: '';
        flex: 1;
        height: 1px;
        background-color: var(--color-border);
    }
`
const TextInput = styled.p`
    margin: 18px 0 8px;
    font-size: 14px;
    font-weight: 600;
    width: 100%;
`
const Image = styled.img`
    height: 20px;
    margin-right: 10px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #ffffff;
    width: 100%;
`

const Input = styled.input`
    border: 1px solid var(--color-border);
    outline: none;
    border-radius: var(--radius-md);
    width: 100%;
    height: 44px;
    padding: 0 12px;
    font-size: 14.5px;
    background-color: var(--color-field);
    :focus {
        background-color: var(--color-surface);
        border-color: var(--color-primary);
        box-shadow: 0 0 0 3px var(--color-primary-soft);
    }
`
const Button = styled.button`
    width: 100%;
    height: 44px;
    background: var(--color-primary);
    border: none;
    border-radius: var(--radius-md);
    font-weight: 600;
    color: #ffffff;
    font-size: 15px;
    cursor: pointer;
    :hover {
        background-color: var(--color-primary-dark);
    }
`
const LinkPassword = styled.a`
    align-self: flex-end;
    text-decoration: none;
`
const ButtonGoogle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 44px;
  margin-bottom: 4px;
  background-color: white;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: 14.5px;
  font-weight: 600;
  cursor: pointer;

  p {
    margin: 0;
  }

  :hover {
    background-color: var(--color-hover);
  }
`

export default LoginComponent
