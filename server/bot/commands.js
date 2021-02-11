// Import db

const names = ['test', 'haha', 'lol'];

const genOrcName = () => {
  const first = names[Math.floor(Math.random() * names.length)];
  return first;
}

module.exports = { genOrcName };