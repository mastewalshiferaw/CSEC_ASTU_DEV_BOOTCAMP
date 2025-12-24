import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function App() {
  return (
    <TaskProvider>
      <Router>  {}
        <div className="min-h-screen transition-colors bg-white dark:bg-gray-900 px-4 sm:px-20">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stats" element={<Stats />} />
          </Routes>
        </div>
      </Router> {}
    </TaskProvider>
  );
}