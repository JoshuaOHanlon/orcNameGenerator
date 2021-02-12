const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/index.js');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

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

  entry.save((err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Saved: ${data}`);
    }
  });
  res.end();
});

app.post('/update', (req, res) => {
  const oldPart = req.body.oldPart;
  const oldTitle = req.body.oldTitle;
  const newPart = req.body.newPart;
  const newTitle = req.body.newTitle;

  db.OrcTitle.findOne({ part: oldPart, title: oldTitle }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      data.part = newPart;
      data.title = newTitle;
      data.save((err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Updated');
        }
      });
    }
    res.end();
  });
});

app.post('/remove', (req, res) => {
  const part = req.body.part;
  const title = req.body.title;

  db.OrcTitle.deleteOne({ part, title }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Deleted');
    }
    res.end();
  });
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