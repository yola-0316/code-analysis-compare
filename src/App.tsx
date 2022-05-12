import './App.css';

import { Routes, Route, Link } from 'react-router-dom';

import GitHubAction from './pages/github-action';

function App() {
  return (
    <div>
      <header>
        <h1 className="text-3xl font-bold underline">
          Code Analysis Tools Compare
        </h1>
        <nav>
          <Link to="/github">Sonar Source</Link>
          <Link to="/github">Danger System</Link>
          <Link to="/github">GitHub Action</Link>
          <Link to="/github">GitHub Action</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="github" element={<GitHubAction />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
