// App.js
import { Route, Routes } from "react-router-dom";
import Navbar from "../admin/components/Navbar";

import Categories from "../admin/pages/Categories";
import Books from "../admin/pages/Books";

function AdminRoute() {
  return (
    
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/categories" element={<Categories />} />
            <Route path="/" element={<Books />} />
          </Routes>
        </div>
      </div>
   
  );
}

export default AdminRoute;
