import './App.css';
import React, { createContext, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ProtectedRoute } from "./pages/auth/PrivateRoute";

import { AuthProvider } from "./pages/auth/AuthContext";

import Dashboard from './pages/app/Dashboard';
import Project from './pages/app/Project';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

export const AppContext = createContext()

function App() {
  const [expand, setExpand] = useState(false)
  const [menuState, setMenuState] = useState(0)

  const changeExpand = () => {
    expand ? setExpand(false) : setExpand(true)
  }

  return (
    <AppContext.Provider
      value={{ changeExpand, expand, menuState, setMenuState }}>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/project"
            element={
              <ProtectedRoute>
                <Project />
              </ProtectedRoute>
            }
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </AppContext.Provider>
  );
}

export default App;