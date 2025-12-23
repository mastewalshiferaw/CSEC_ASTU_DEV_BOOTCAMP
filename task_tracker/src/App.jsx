import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TaskProvider } from './store/taskContext';
import Header from './components/Header';
import Home from './pages/Home';
import Stats from './pages/stats';

export default function App() {
  return (
    <TaskProvider>
      <BrowserRouter>
        <div className="min-h-screen transition-colors bg-white dark:bg-gray-900 px-4 sm:px-20">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stats" element={<Stats />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TaskProvider>
  );
}