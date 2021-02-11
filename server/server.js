const express = require('express');
const db =
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 8000;

app.post('/name', (req, res) => {

});

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});