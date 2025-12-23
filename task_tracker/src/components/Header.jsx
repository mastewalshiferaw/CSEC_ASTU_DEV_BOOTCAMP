import { useTasks } from '../store/taskContext';
import { Link } from 'react-router-dom';

export default function Header() {
  const { darkMode, setDarkMode } = useTasks();
  return (
    <header className="flex justify-between items-center py-6">
      <h1 className="text-2xl font-bold dark:text-white">Task Tracker</h1>
      <nav className="flex gap-4 items-center">
        <Link to="/" className="text-blue-500">Home</Link>
        <Link to="/stats" className="text-blue-500">Stats</Link>
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded text-sm"
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </nav>
    </header>
  );
}