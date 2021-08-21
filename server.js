require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const users = require('./routes/userRoutes');

require('./config/dbConnect')();
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// //Routes
// app.use(express.json());

// const __dirname2 = path.resolve();
// app.use('/uploads', express.static(path.join(__dirname2, '/uploads')));

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname2, '/frontend/build')));

//    app.get('*', (req, res) =>
//     res.sendFile(path.resolve(__dirname2, 'frontend', 'build', 'index.html'))
//   );
// } else {
//   app.get('/', (req, res) => {
//     res.send('API is running....');
//   });
// }

// CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  next();
});

// Route Middleware
app.use('/api/users', users);


//End of deployment
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  const host = server.address().address;
  // const port = server.address().port;
  console.log(`server runs on host ${host}, port ${PORT}`);
});