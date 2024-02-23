const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

router.post('/', transactionController.borrowBook);

router.put('/:id', transactionController.returnBook);

router.get('/', transactionController.getAllTransactions);

router.get('/user/:userId', transactionController.getUserTransactions);

router.get('/book/:bookId', transactionController.getBookTransactions);


module.exports = router;
