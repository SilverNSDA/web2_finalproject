var _PORT = 3000;

var express = require('express'),
	bodyParser = require('body-parser')
	morgan = require('morgan')
	cors = require('cors');

var app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
	// res.end('hello from nodejs');
	var ret = {
		msg: 'hello from nodejs api'
	};
	res.json(ret);
});

app.listen(_PORT, () => {
	console.log('API running on port '+_PORT);
});