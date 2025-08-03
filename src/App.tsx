import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import Projects from './pages/Projects.tsx';

export default function App() {
  return (
    <Routes>
      <Route path='/landing-page' element={<HomePage />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
  );
}
