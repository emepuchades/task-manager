import './App.css'
import { createContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './pages/auth/PrivateRoute'
import { AuthProvider } from './pages/auth/AuthContext'

import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Main from './pages/app/Main'
import Board from './pages/app/Board/Board'

export const AppContext = createContext()

function App() {
    const [expand, setExpand] = useState(false)
    const [menuState, setMenuState] = useState(0)

    const changeExpand = () => {
        expand ? setExpand(false) : setExpand(true)
    }

    return (
        <AppContext.Provider
            value={{ changeExpand, expand, menuState, setMenuState }}
        >
            <AuthProvider>
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route
                        path='/'
                        element={
                            <ProtectedRoute>
                                <Main />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path='/project/:id'
                        element={
                            <ProtectedRoute>
                                <Board />
                            </ProtectedRoute>
                        }
                    />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </AuthProvider>
        </AppContext.Provider>
    )
}

export default App
