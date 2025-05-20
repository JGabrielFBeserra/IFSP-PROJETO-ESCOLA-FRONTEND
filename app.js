const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));  // Caminho correto para 'views'

app.use(express.static(path.join(__dirname, 'public')));

// public-site
app.get('/', (req, res) => {res.render('admin-index', { activePage: 'index' });});



module.exports = app;

