var _PORT = 3000;

var express = require('express'),
	bodyParser = require('body-parser'),
	morgan = require('morgan'),
	cors = require('cors'),
	session = require('express-session'),
	cookieParser = require('cookie-parser');


var path = require('path');
var flash = require('req-flash');
// var bootstrap = require('bootstrap');
var app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());

// app.get('/', (req, res) => {
// 	// res.end('hello from nodejs');
// 	var ret = {
// 		msg: 'hello from nodejs api'
// 	};
// 	res.json(ret);
// });


//Config
app.set('views',path.resolve(__dirname+'/../frontend_src/views'));
app.set('view engine', 'ejs');

//Css and js
app.use(express.static(path.resolve(__dirname+'/../frontend_src/views')));
app.use(express.static(path.resolve(__dirname+'/node_modules/bootstrap/dist')));
app.use(express.static(path.resolve(__dirname+'/node_modules/jquery/dist')));

//Authentication
app.use(session({
	// user: 'anonymous',
	secret: '1560008',
	resave: false,
	saveUninitialized: false,
	cookie: {
		maxAge: 900000
	}
}));

app.use(flash());
app.use((req,res,next)=>{
	res.locals._flash = req.session._flash;
	if(typeof req.session.user != 'undefined')
		res.locals.user = req.session.user;
	else{
		res.locals.user = {
			id: '',
			name: '',
			role: ''
		};
	}
	// console.log(req.session.user);
	// console.log(res.locals.user);
	// console.log(res.locals);
	// console.log(req.session);
	// console.log('abcxyz');
	next();
});
// Controller
var auth = require('./users/auth_middleware.js');
var indexCtrl = require('./controller/indexController.js');
app.use('/',auth, indexCtrl);


//log

app.listen(_PORT, () => {
	// console.log(app.locals);
	console.log('API running on port '+_PORT);
});