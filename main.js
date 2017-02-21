const express = require('express')
const app = express()

// var hbs = require('hbs');
// var hbs = require('hbs');
var blogEngine = require('./app/blog');

app.use( express.static('public') )

app.set('view engine', 'pug');
// app.set('view engine', 'html');
// app.engine('html', hbs.__express);

app.get('/', function(req, res) {
  const title = 'My Blog'
  const entries = blogEngine.getBlogEntries()
  res.render('index', { title, entries });
});

app.get('/about', function(req, res) {
  const title = 'About Me'
  res.render('about', { title });
});

app.get('/article/:id', function(req, res) {
  const idPost = req.params.id
  const post = blogEngine.getBlogEntry(idPost);
  res.render('article',{ post });
});


app.listen(3000, () => console.log('Listening on PORT 3000...'))