const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./back-end/routes/userRoutes');
const bookRoutes = require('./back-end/routes/bookRoutes');
const transactionRoutes = require('./back-end/routes/transactionRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb+srv://praneeth:Praneeth135@cluster0.qoyuuut.mongodb.net/officemanagement1?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(error => console.error('Error connecting to MongoDB:', error));

  app.use(express.json());
  app.use('/api/user', userRoutes);
  app.use('/api/books', bookRoutes);
  app.use('/api/transactions', transactionRoutes);

