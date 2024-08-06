import express from "express";
import multer from "multer";
import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

const booksFilePath = path.join(__dirname, '../data/books.json');

if (!fs.existsSync(path.dirname(booksFilePath))) {
  fs.mkdirSync(path.dirname(booksFilePath), { recursive: true });
}

if (!fs.existsSync(booksFilePath)) {
  fs.writeFileSync(booksFilePath, JSON.stringify({ categories: {} }));
}

const Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, '../uploads');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: Storage }).fields([
  { name: 'image', maxCount: 1 },
  { name: 'pdf', maxCount: 1 }
]);

const readBooksFile = () => {
  const booksData = fs.readFileSync(booksFilePath);
  return JSON.parse(booksData);
};

const writeBooksFile = (data) => {
  fs.writeFileSync(booksFilePath, JSON.stringify(data, null, 2));
};

// Route for creating a new book in a category
router.post("/:category", (request, response) => {
  const category = request.params.category;
  upload(request, response, (err) => {
    if (err) {
      return response.status(400).json({ message: err.message });
    } else {
      const data = readBooksFile();
      const newBook = {
        id: Date.now(),
        title: request.body.title,
        author: request.body.author,
        description: request.body.description,
        published: request.body.published,
        image: request.files.image ? request.files.image[0].filename : null,
        pdf: request.files.pdf ? request.files.pdf[0].filename : null
      };
      if (!data.categories[category]) {
        return response.status(404).json({ message: "Category not found" });
      }
      data.categories[category].push(newBook);
      writeBooksFile(data);
      return response.status(201).json(newBook);
    }
  });
});

// Get all books from JSON file
router.get('/books', (request, response) => {
  try {
    const data = readBooksFile();
    let allBooks = [];
    for (const category in data.categories) {
      const booksWithCategory = data.categories[category].map(book => ({
        ...book,
        category,
      }));
      allBooks = allBooks.concat(booksWithCategory);
    }
    return response.status(200).json(allBooks);
  } catch (error) {
    console.error('Error getting books:', error);
    response.status(500).send({ message: error.message });
  }
});


// Add this route in your uploadRoutes.js file

router.get('/books/:id', (request, response) => {
  try {
    const data = readBooksFile();
    const bookId = parseInt(request.params.id, 10);
    let book = null;
    for (const category in data.categories) {
      const foundBook = data.categories[category].find(book => book.id === bookId);
      if (foundBook) {
        book = foundBook;
        break;
      }
    }
    if (!book) {
      return response.status(404).json({ message: "Book not found" });
    }
    return response.status(200).json(book);
  } catch (error) {
    console.error('Error fetching book:', error);
    response.status(500).send({ message: error.message });
  }
});


// Get books by category
router.get('/category/:category', (request, response) => {
  const category = request.params.category;
  try {
    const data = readBooksFile();
    if (!data.categories[category]) {
      return response.status(404).json({ message: "Category not found" });
    }
    return response.status(200).json(data.categories[category]);
  } catch (error) {
    console.error('Error getting books:', error);
    response.status(500).send({ message: error.message });
  }
});

// Endpoint to get categories
router.get('/category', (req, res) => {
  fs.readFile('data/books.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send({ error: 'Failed to read categories' });
      return;
    }
    try {
      const jsonData = JSON.parse(data);
      // Extract only the category names
      const categories = Object.keys(jsonData.categories);
      res.json({ categories });
    } catch (parseError) {
      res.status(500).send({ error: 'Failed to parse categories JSON' });
    }
  });
});
// Create a new category
router.post("/category/:category", (request, response) => {
  const category = request.params.category;
  try {
    const data = readBooksFile();
    if (data.categories[category]) {
      return response.status(400).json({ message: "Category already exists" });
    }

    data.categories[category] = [];
    writeBooksFile(data);
    return response.status(201).json({ message: "Category created successfully" });
  } catch (error) {
    console.error('Error creating category:', error);
    response.status(500).send({ message: error.message });
  }
});

// Deleting a book by title

router.delete('/title/:title', (request, response) => {
  try {
    const data = readBooksFile();
    const title = decodeURIComponent(request.params.title);
    let bookDeleted = false;

    // Iterate through categories to find and delete the book
    for (const category in data.categories) {
      const categoryBooks = data.categories[category];
      const bookIndex = categoryBooks.findIndex(book =>
        book.title.toLowerCase() === title.toLowerCase()
      );

      if (bookIndex !== -1) {
        const [deletedBook] = categoryBooks.splice(bookIndex, 1);
        bookDeleted = true;

        // Remove the uploaded files if they exist
        if (deletedBook.image) {
          const imagePath = path.join(__dirname, '../uploads', deletedBook.image);
          if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
          }
        }
        if (deletedBook.pdf) {
          const pdfPath = path.join(__dirname, '../uploads', deletedBook.pdf);
          if (fs.existsSync(pdfPath)) {
            fs.unlinkSync(pdfPath);
          }
        }

        break; // Exit loop after the book is deleted
      }
    }

    if (!bookDeleted) {
      return response.status(404).json({ message: "Book not found" });
    }

    writeBooksFile(data);
    return response.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error('Error deleting book:', error);
    response.status(500).send({ message: error.message });
  }
});

//Deleting a whole category
router.delete('/category/:category', (request, response) => {
  try {
    const data = readBooksFile();
    const category = decodeURIComponent(request.params.category);

    // Check if the category exists
    if (!data.categories[category]) {
      return response.status(404).json({ message: "Category not found" });
    }

    // Delete all books within the category and their associated files
    const booksToDelete = data.categories[category];
    booksToDelete.forEach(book => {
      // Remove the uploaded files if they exist
      if (book.image) {
        const imagePath = path.join(__dirname, '../uploads', book.image);
        if (fs.existsSync(imagePath)) {
          fs.unlinkSync(imagePath);
        }
      }
      if (book.pdf) {
        const pdfPath = path.join(__dirname, '../uploads', book.pdf);
        if (fs.existsSync(pdfPath)) {
          fs.unlinkSync(pdfPath);
        }
      }
    });

    // Delete the category itself
    delete data.categories[category];

    writeBooksFile(data);
    return response.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    console.error('Error deleting category:', error);
    response.status(500).send({ message: error.message });
  }
});




// Search for books by title or author across categories
router.get('/search', (req, res) => {
  const { q, category } = req.query; // Extract 'q' and 'category' from query parameters
  try {
    const data = readBooksFile();
    let results = [];

    if (category) {
      // Search within a specific category
      const decodedCategory = decodeURIComponent(category);
      if (!data.categories[decodedCategory]) {
        return res.status(404).json({ message: "Category not found" });
      }
      const categoryBooks = data.categories[decodedCategory];
      if (q) {
        // Filter by title or author if 'q' is provided
        results = categoryBooks.filter(book =>
          book.title.toLowerCase().includes(q.toLowerCase()) ||
          book.author.toLowerCase().includes(q.toLowerCase())
        );
      } else {
        // Return all books in the category if 'q' is not provided
        results = categoryBooks;
      }
    } else {
      // Search across all categories if 'category' is not specified
      for (const cat in data.categories) {
        const categoryResults = data.categories[cat].filter(book =>
          book.title.toLowerCase().includes(q.toLowerCase()) ||
          book.author.toLowerCase().includes(q.toLowerCase())
        );
        results = results.concat(categoryResults);
      }
    }

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});




export default router;
