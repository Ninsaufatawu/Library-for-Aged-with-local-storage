// App.js
import { Route, Routes } from "react-router-dom";


import Categories from "../admin/pages/Categories";
import Books from "../admin/pages/Books";

function AdminRoute() {
  return (
    
      
          <Routes>
            <Route path="/category" element={<Categories />} />
            <Route path="/" element={<Books />} />
          </Routes>
     
  );
}

export default AdminRoute;
