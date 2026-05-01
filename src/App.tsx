import NavBar from './components/layout/NavBar';
import Home from './components/pages/Home';
import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {    
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;