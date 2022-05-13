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
        <h1 className="text-3xl font-bold underline text-blue-500 hover:text-blue-400 my-4">
          <Link to="/">Code Analysis Tools Compare</Link>
        </h1>
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
