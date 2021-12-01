const express = require('express');
const ejs = require('ejs');
const app = express();
const port = 3000;

// middlewares
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Agency app listening at http://localhost:${port}`);
});
