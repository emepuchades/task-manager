import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavLeft from './components/NavLeft';
import NavTop from './components/NavTop';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <NavLeft />
      <NavTop />
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route exact path="/about" component={NavLeft} />
      </Routes>
    </Router>

  );
}

export default App;
