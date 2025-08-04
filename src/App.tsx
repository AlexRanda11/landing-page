import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import Resume from './components/resume/Resume.tsx';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/resume' element={<Resume />} />
    </Routes>
  );
}
