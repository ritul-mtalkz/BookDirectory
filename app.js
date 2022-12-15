const express = require('express');
const port = 3000;
const books = require('./books');

const app = express();

app.use(express.json());
app.use('/books', books);

// app.get('/', function(req, res){
//     res.send("Hello I am running")
// })

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});