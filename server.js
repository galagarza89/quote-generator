const express = require('express');
const app = express();

var quotes = require('./quotes.json');

app.use(express.static(__dirname)); 

app.get('/quotes', (req, res) => {
	res.send({quotes});
});



app.listen(3000, () => {
	console.log('Listening on port 3000');
});