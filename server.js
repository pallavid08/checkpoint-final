require('dotenv').config({ path: './config.env' });
const express = require('express');
const app = express();
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');
const Routes = require('./routes/routes');
const path = require('path');
var cors = require('cors');

connectDB();

app.use(express.json());

app.use(cors());

app.get('/', (req, res, next) => {
   res.send('Api running');
});

// Connecting Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/private', require('./routes/private'));
Routes(app);

app.use(express.static(path.join(__dirname, 'build')));

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/');
   res.setHeader('Access-Control-Allow-Credentials', true);
   next();
});

app.use((req, res) =>
   res.sendFile(path.join(__dirname, 'build', 'index.html'))
);

// Error Handler Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
   console.log(`Sever running on port ${PORT}`)
);

process.on('unhandledRejection', (err, promise) => {
   console.log(`Logged Error: ${err.message}`);
   server.close(() => process.exit(1));
});
