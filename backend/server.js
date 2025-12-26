const express = require('express');
const {port,dbUri} = require('./config/index');
const cors= require('cors');
const apiRoutes = require('./routes/api');
const logger = require('./middlewares/logger');
//const rateLimiter = require('./middlewares/rateLimiter');

const app = express();


app.use(cors());
app.use(express.json());
app.use(logger);
app.use('/api' ,apiRoutes);
//app.use(require('./middlewares/errorHandler'));

// Centralized MongoDB connection
const mongoose = require('mongoose');
const mongoUri = dbUri;

mongoose.connect(mongoUri)
  .then(() => console.log('Connected to MongoDB:', mongoUri))
  .catch(err => console.error('MongoDB connection error:', err));


app.get('/',(req, res) => {
console.log(req.headers);
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');   
   res.end('<html><body><h1>This is a test server</h1>'+
    '<p>Timer: <span id="timer" color="blue">0</span> seconds</p>'+ 
    '<script>' +
    'const timerElement = document.getElementById("timer");' +
    'let seconds = 0;' +
    'setInterval(() => {' +
    '  seconds++;' +
    '  timerElement.textContent = seconds;' +
    '}, 1000);' +
    '</script>' +
    '</body></html>');
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});     

