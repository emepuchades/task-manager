import { Navigate } from 'react-router-dom'
import styled from 'styled-components'
import { useAuth } from './AuthContext'

export function ProtectedRoute({ children }) {
    const { user, loading } = useAuth()

    if (loading) return <Loading>Cargando…</Loading>

    if (!user) return <Navigate to='/login' />

    return <>{children}</>
}

const Loading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 14px;
    color: var(--color-text-muted);
`
