const Book = require('../models/book');

exports.addBook = async (req, res) => {
  try {
    const { title, author } = req.body;
    const book = new Book({ title, author });
    await book.save();
    res.status(201).json({ message: 'Book added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.editBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author } = req.body;
    await Book.findByIdAndUpdate(id, { title, author });
    res.json({ message: 'Book updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

