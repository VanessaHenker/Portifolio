import Inicio from './componentes/inicio';
import NavBar from './componentes/layout/navbar';

import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Inicio/>} />
      </Routes>
    </Router>
  );
}

export default App;