const mongoose = require('mongoose');

const dbNames = mongoose.createConnection('mongodb://localhost/orcbot', { useNewUrlParser: true, useUnifiedTopology: true });
const dbPieces = mongoose.createConnection('mongodb://localhost/orcbotparts', { useNewUrlParser: true, useUnifiedTopology: true });

//const dbNames = mongoose.connection;
dbNames.on('error', console.error.bind(console, 'connection error:'));
dbNames.once('open', () => {
  console.log('DB_Names Connected');
});

//  Will be used to store 'top rated' orc names
const orcNameSchema = new mongoose.Schema({
  first: String,
  connector: String,
  lastOne: String,
  lastTwo: String
});

dbPieces.on('error', console.error.bind(console, 'connection error:'));
dbPieces.once('open', () => {
  console.log('DB_Pieces Connected');
});

//  Stores name pieces - 'first', 'connector', 'lastOne', 'lastTwo'
const namePieceSchema = new mongoose.Schema({
  part: String,
  title: String
});

const OrcName = dbNames.model('OrcName', orcNameSchema);
const OrcTitle = dbPieces.model('OrcTitle', namePieceSchema);

module.exports = { OrcName, OrcTitle };