import { useState } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'
import { Alert } from './Alert'

function Register() {
    const { signup } = useAuth()

    const [user, setUser] = useState({
        email: '',
        password: '',
        username: '',
    })

    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault()
        setError('')
        try {
            await signup(user.email, user.password, user.username)
            navigate('/')
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <Block>
            {error && <Alert message={error} />}

            <Form onSubmit={handleSubmit}>
                <Title>Crear cuenta</Title>
                <Text className='subtitle'>
                    Empieza a organizar tus proyectos.
                </Text>

                <TextInput> Email </TextInput>
                <Input
                    type='email'
                    onChange={e => setUser({ ...user, email: e.target.value })}
                    placeholder='nombre@email.com'
                />

                <TextInput> Contraseña </TextInput>
                <Input
                    type='password'
                    placeholder='Mínimo 6 caracteres'
                    onChange={e =>
                        setUser({ ...user, password: e.target.value })
                    }
                />

                <Button> Crear cuenta </Button>
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
        margin: 0 0 10px;
        font-size: 15px;
        font-weight: 400;
        color: var(--color-text-muted);
    }
`
const TextInput = styled.p`
    margin: 18px 0 8px;
    font-size: 14px;
    font-weight: 600;
    width: 100%;
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
    margin-top: 28px;
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

export default Register
