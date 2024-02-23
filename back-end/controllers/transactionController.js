const Transaction = require('../models/transaction');

exports.borrowBook = async (req, res) => {
  try {
    const { userId, bookId } = req.body;
    const transaction = new Transaction({ userId, bookId });
    await transaction.save();
    res.status(201).json({ message: 'Book borrowed successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.returnBook = async (req, res) => {
  try {
    const { id } = req.params;
    await Transaction.findByIdAndUpdate(id, { returnedDate: Date.now() });
    res.json({ message: 'Book returned successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


