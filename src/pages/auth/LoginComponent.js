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

                <ButtonGoogle onClick={handleGoogleSignin}>
                    <Image src={logo} alt='Logo' /> <p>Accede con google</p>
                </ButtonGoogle>

                <TextInput> Email</TextInput>
                <Input
                    type='email'
                    name='email'
                    id='email'
                    onChange={handleChange}
                    placeholder='email'
                />
                <TextInput> Password </TextInput>
                <Input
                    type='password'
                    name='password'
                    id='password'
                    onChange={handleChange}
                />
                <LinkPassword href='#!' onClick={handleResetPassword}>
                    <Text>¿Olvidaste la contraseña?</Text>
                </LinkPassword>

                <Button type='submit'> Iniciar sesión </Button>
                <Text>
                    ¿No tienes cuenta? <Link to='/register'> Crear cuenta</Link>
                </Text>
            </Form>
        </Block>
    )
}

const Block = styled.div`
`

const Title = styled.p`
    font-size: 30px;
    font-weight: bold;
    color: #3b79d3;
`
const Text = styled.p`
    font-size: 15px;
    &.textpassword {
        width: 100%;
    }
`
const TextInput = styled.p`
    font-size: 18px;
    width: 100%;
`
const Image = styled.img`
    padding: 10px;
    height: 20px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    width: 340px;
    height: 350px;
    border-radius: 8px;
    padding: 60px;
`

const Input = styled.input`
    border: none;
    outline: none;
    border-radius: 8px;
    width: 96%;
    padding: 10px;
    background-color: #ffffff;
`
const Button = styled.button`
    width: 100%;
    padding: 1em;
    background: #3b79d3;
    border: none;
    border-radius: 10px;
    font-weight: 600;
    color: #ffffff;
    font-size: 15px;
`
const LinkPassword = styled.a`
    width: 100%;
`
const ButtonGoogle = styled.button`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  width: 100%;
  background-color: white;
  border: 1px solid #F1F1F1;
  border-radius: 10px;
  font-size: 16px;
}
`

export default LoginComponent
