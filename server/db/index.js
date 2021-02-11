const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/orcbot', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected');
});

const orcNameSchema = new mongoose.Schema({
  first: String,
  connector: String,
  lastOne: String,
  lastTwo: String
});

const OrcName = mongoose.model('OrcName', orcNameSchema);

module.exports = { OrcName };