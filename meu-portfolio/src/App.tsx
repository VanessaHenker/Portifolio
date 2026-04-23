import Inicio from './componentes/inicio';

import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio/>} />
      </Routes>
    </Router>
  );
}

export default App;