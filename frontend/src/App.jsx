import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SettingsProvider } from "./context/SettingsContext"; // Import the context provider
import AdminRoute from "./routes/AdminRoute";
import { MainRoute } from "./routes/MainRoute";
import { Settings } from "./pages/Settings";
import  CategoryPage  from "./pages/CategoryPage";
import { BookDetails } from "./components/BookDetails";
import SearchPage from "./components/SearchPage";
import Categories from "./admin/pages/Categories";
import Books from "./admin/pages/Books";
import NotificationPage from './pages/NotificationPage';
import FavoritePage from "./pages/FavoritePage";
import {NewsEventPage} from "./pages/NewsEventPage"


function App() {
  return (
    <SettingsProvider>
      <Router>
        <Routes>
          <Route path="*" element={<MainRoute />} />
          <Route path="/admin/*" element={<AdminRoute />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/category" element={<Categories />} />
          <Route path="/adminBooks" element={<Books />} />
          <Route path="/notifications" element={<NotificationPage />} />
          <Route path="/favorite" element={<FavoritePage/>}/>
          <Route path="/news" element={<NewsEventPage/>}/>
        </Routes>
      </Router>
    </SettingsProvider>
  );
}

export default App;
