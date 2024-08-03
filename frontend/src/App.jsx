// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import Categories from './pages/Categories';
import Books from './pages/Books';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Categories />} />
            <Route path="/books" element={<Books />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
