import NavBar from './components/layout/navBar';
import Home from './components/pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {    
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;