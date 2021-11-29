const express = require('express');
const app = express();
const port = 3000;

// middlewares
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Agency app listening at http://localhost:${port}`);
});
