import './App.css';
import React, { createContext, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavLeft from './components/NavLeft';
import NavTop from './components/NavTop';
import Dashboard from './pages/Dashboard';
export const AppContext = createContext()

function App() {
  const [expand, setExpand] = useState(false)

  const changeExpand = () => {
    expand ? setExpand(false) : setExpand(true)
  }

  return (
    <AppContext.Provider
      value={{ changeExpand, expand }}>
      <Router>
        <NavLeft />
        <NavTop />
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route exact path="/about" component={NavLeft} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
