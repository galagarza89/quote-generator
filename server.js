const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

var quotes = require('./quotes.json');

app.use(express.static(__dirname)); 

app.get('/quotes', (req, res) => {
	res.send({quotes});
});



app.listen(port);
