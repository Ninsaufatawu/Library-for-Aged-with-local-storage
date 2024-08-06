// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminRoute from "./routes/AdminRoute";
import { MainRoute } from "./routes/MainRoute";
import { Settings } from "./pages/Settings";
import { CategoryPage } from "./pages/CategoryPage";
import { BookDetails } from "./components/BookDetails";
import SearchPage from "./components/SearchPage";





function App() {
  return (
    <Router>

          <Routes >
              <Route path="*" element={<MainRoute />} />
              <Route path="/admin" element={<AdminRoute/>}/>
              <Route path="/settings" element={<Settings />} />
              <Route path="/Categories" element={<CategoryPage />} />
              <Route path="/book/:id" element={<BookDetails/>}/>
              <Route path="/search" element={<SearchPage/>}/>
            
              
          </Routes>

    </Router>
  );
}

export default App;
