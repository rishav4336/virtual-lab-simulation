const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public')); //tell express to serve up this public folder as a static resource.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

let data;
// handle get requests here
app.get('/', function(req, res) {
  res.render('index');
});

app.get('/theory', function(req, res) {
  res.render('theory');
});

app.get('/procedure', function(req, res) {
  res.render('procedure');
});

app.get('/prequiz', function(req, res) {
  res.render('prequiz');
});

app.get('/simulation', function(req, res) {
  res.render('simulation');
});

app.get('/postquiz', function(req, res) {
  res.render('postquiz');
});

app.get('/video', function(req, res) {
  res.render('video');
});

app.get('/calculation', function(req, res){
  res.render('calculation');
});

app.get('/datasheet', function(req, res) {
  res.render('datasheet',{
    tau_data: data.tau_data,
    Xa_data: data.Xa_data,
    temps: data.temps
  });
});

app.post('/datasheet', function(req, res){
  data = req.body;
});


// Does not require changes
app.listen(3000, function() {
  console.log('Server started on port 3000');
});
