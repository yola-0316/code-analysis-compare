import './App.css';

import { Routes, Route, Link } from 'react-router-dom';

import GitHubAction from './pages/github-action';

function App() {
  return (
    <div>
      <header>
        <nav>
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
