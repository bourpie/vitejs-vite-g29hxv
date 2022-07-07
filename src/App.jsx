import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Ratings from './Pages/Ratings';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Rating from './components/Rating';

function App() {
  return (
    <Router>
      <header className="bg-dark position-absolute w-100 p-3">
        <nav className="d-flex gap-3">
          <Link className="link-light" to="/">
            Home
          </Link>
          <Link className="link-light" to="/Ratings">
            Ratings
          </Link>
        </nav>
      </header>
      <main className="App vh-100 center bgcolor-neutral-900">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ratings" element={<Ratings />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
