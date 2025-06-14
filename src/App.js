import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componentes/Home';
import About from './componentes/About';
import Dashboard from './componentes/Dashboard';
import Header from './componentes/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
export default App;
