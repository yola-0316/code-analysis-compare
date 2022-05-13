import './App.css';

import { Routes, Route, Link } from 'react-router-dom';

import Home from './pages/home';
import Sonarsource from './pages/sonarsource';
import Danger from './pages/danger';
import Embold from './pages/embold';
import Synk from './pages/synk';

function App() {
  return (
    <div className="container mx-auto">
      <header>
        <h1 className="text-3xl font-bold underline hover:text-blue-500 my-4">
          <Link to="/">Code Analysis Tools Compare</Link>
        </h1>
        <nav className="flex gap-x-4">
          <Link className="hover:text-blue-500 underline" to="/sonarsource">
            sonar source
          </Link>
          <Link className="hover:text-blue-500 underline" to="/danger">
            danger systems
          </Link>
          <Link className="hover:text-blue-500 underline" to="/embold">
            embold
          </Link>
          <Link className="hover:text-blue-500 underline" to="/synk">
            synk
          </Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sonarsource" element={<Sonarsource />} />
          <Route path="danger" element={<Danger />} />
          <Route path="embold" element={<Embold />} />
          <Route path="synk" element={<Synk />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
