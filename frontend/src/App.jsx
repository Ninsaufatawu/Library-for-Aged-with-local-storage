// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminRoute from "./routes/AdminRoute";
import { MainRoute } from "./routes/MainRoute";
import { Settings } from "./pages/Settings";
import { CategoryPage } from "./pages/CategoryPage";



function App() {
  return (
    <Router>

          <Routes >
              <Route path="/" element={<MainRoute />} />
              <Route path="/admin" element={<AdminRoute/>}/>
              <Route path="/settings" element={<Settings />} />
              <Route path="/Categories" element={<CategoryPage />} />
          </Routes>

    </Router>
  );
}

export default App;
