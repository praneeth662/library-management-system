const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.post('/', bookController.addBook);

router.get('/', bookController.getAllBooks);

router.get('/:id', bookController.getBookById);

router.put('/:id', bookController.editBook);

router.delete('/:id', bookController.deleteBook);

module.exports = router;
