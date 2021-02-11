const names = require('./names.js');

const genOrcName = () => {
  const first = names.names[Math.floor(Math.random() * names.names.length)];
  return first;
}

module.exports = { genOrcName };