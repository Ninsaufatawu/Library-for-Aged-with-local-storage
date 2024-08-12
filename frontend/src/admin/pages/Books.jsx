// Books.js
import { useState, useEffect } from "react";
import axios from "axios";
import AddBook from "../components/AddBook";
import SearchBook from "../components/SearchBook";
import Navbar from "../components/Navbar";


function Books() {
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchBooks();
    fetchCategories();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:8000/upload/books");
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8000/upload/category");
      setCategories(response.data.categories || []);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  return (
    <>
      <div>
      <Navbar/>
      </div>
      <div className=" bg-gray-50 dark:bg-gray-900 p-4 relative">
      
      <div className="flex flex-col lg:flex-row gap-3">
        <AddBook categories={categories} fetchBooks={fetchBooks} />
        <SearchBook categories={categories} books={books} setBooks={setBooks} />
      </div>
    </div>
    </>
  );
}

export default Books;
