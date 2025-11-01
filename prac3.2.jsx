import React, { useState } from "react";

export default function LibraryManagement() {
  const [books, setBooks] = useState([
    { title: "1984", author: "George Orwell" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
  ]);

  const [search, setSearch] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  // Filter books dynamically based on search text
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  // Add new book
  const handleAddBook = () => {
    if (newTitle.trim() && newAuthor.trim()) {
      setBooks([...books, { title: newTitle, author: newAuthor }]);
      setNewTitle("");
      setNewAuthor("");
    }
  };

  // Remove book
  const handleRemoveBook = (title) => {
    setBooks(books.filter((book) => book.title !== title));
  };

  return (
    <div className="p-6 max-w-xl mx-auto border rounded-md shadow-md bg-white space-y-4">
      <h1 className="text-2xl font-bold">Library Management</h1>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search by title or author"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border px-3 py-2 rounded-md"
      />

      {/* Add Book Form */}
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="New book title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="border px-3 py-2 rounded-md flex-1"
        />
        <input
          type="text"
          placeholder="New book author"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
          className="border px-3 py-2 rounded-md flex-1"
        />
        <button
          onClick={handleAddBook}
          className="bg-black text-white px-4 py-2 rounded-md"
        >
          Add Book
        </button>
      </div>

      {/* Book List */}
      <div className="space-y-2">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <div
              key={index}
              className="flex justify-between items-center border rounded-md px-3 py-2"
            >
              <span>
                <strong>{book.title}</strong> by {book.author}
              </span>
              <button
                onClick={() => handleRemoveBook(book.title)}
                className="border px-3 py-1 rounded-md hover:bg-gray-100"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 italic">No books found</p>
        )}
      </div>
    </div>
  );
}
