const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/index.js');
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/title', (req, res) => {
  db.OrcTitle.find((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  })
});

app.post('/title', (req, res) => {
  const part = req.body.part;
  const title = req.body.title;
  const entry = new db.OrcTitle({ part, title });
  //console.log(entry);
  entry.save((err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Saved: ${data}`);
    }
  });
  res.end();
});

//  Will be used to save / access 'top' orc names
app.post('/name', (req, res) => {
  console.log(req.body);
  res.end();
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});