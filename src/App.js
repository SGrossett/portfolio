import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './components/Home';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
            
          <Route path='/projects' element={<Projects />} />
        </Routes>
    </Router>
  );
}

export default App;
