import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import Resume from './pages/resume/Resume.tsx';
import Research from './pages/research/Research.tsx';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/resume' element={<Resume />} />
      <Route path='/research' element={<Research />} />
    </Routes>
  );
}
