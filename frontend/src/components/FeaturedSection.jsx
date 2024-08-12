import { useState, useEffect } from "react";
import axios from "axios";
import profileImage from "../assets/IMG-20240508-WA0030-removebg-preview.png";

const FeaturedSection = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:8000/upload/books"); // Adjust the endpoint as needed
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="flex justify-end p-4 h-screen flex-col bg-slate-50 dark:bg-gray-700">
      <div className="w-72 relative pb-5">
        <div className="bg-white p-4 rounded-lg shadow-md dark:bg-gray-800 dark:text-white">
          <h2 className="text-xl font-semibold mb-4">Featured Creators</h2>
          <div className="flex items-center mb-4">
            <img 
              src={profileImage}
              alt="Murakami Flowers" 
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">Murakami Flowers</h3>
              <p className="text-gray-500">@mftmkus</p>
              <p className="text-gray-600">
                Murakami Flowers is a work in which artist Takashi Murakami's representative artwork...
              </p>
              <button className="mt-2 text-blue-500">Follow</button>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md mt-4 dark:bg-gray-800 relative top-4">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Recent Books Read</h2>
          {books.length === 0 ? (
            <p>No books available.</p>
          ) : (
            books.slice(0, 4).map(book => (
              <div key={book.id} className="flex items-center mb-4 dark:text-white">
                <img 
                  src={`http://localhost:8000/uploads/${book.image}`} 
                  alt={book.title} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{book.title}</h3>
                  <p className="text-gray-500">By {book.author}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
