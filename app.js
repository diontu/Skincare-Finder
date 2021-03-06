const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productsRouter = require('./api/routes/products.route');
const contactRouter = require('./api/routes/contact.route');
const path = require('path');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // parses JSON requests and places them in request.body

// api routes
app.use('/api/products', productsRouter);
app.use('/api/contact', contactRouter);

if (process.env.MODE === 'prod') {
    app.use(express.static(path.join(__dirname, 'frontend', 'build')));

    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
    });
}

// connect with the DB
const uri = process.env.DB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Connected to MongoDB...');
});

const server = app.listen(PORT, () => {
    console.log('Connected to PORT: ' + PORT);
});
server.timeout = 60000;