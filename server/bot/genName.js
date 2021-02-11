const db = require('../db/index.js');

//const names = ['test', 'haha', 'lol'];

const sortData = (data) => {
  let output = {
    first: [],
    connector: [],
    lastOne: [],
    lastTwo: []
  };

  data.forEach(i => {
    switch (i.part) {
      case 'first':
        output.first.push(i.title);
        break;
      case 'connector':
        output.connector.push(i.title);
        break;
      case 'lastOne':
        output.lastOne.push(i.title);
        break;
      case 'lastTwo':
        output.lastTwo.push(i.title);
    }
  });
  return output;
};

const genOrcName = async () => {
  const res = await db.OrcTitle.find();
  const storage = sortData(res);

  const first = storage.first[Math.floor(Math.random() * storage.first.length)];
  const connector = storage.connector[Math.floor(Math.random() * storage.connector.length)];
  const lastOne = storage.lastOne[Math.floor(Math.random() * storage.lastOne.length)];
  const lastTwo = storage.lastTwo[Math.floor(Math.random() * storage.lastTwo.length)];

  return first;
  //return `${first} ${connector} ${lastOne} ${lastTwo}`;
};

module.exports = { genOrcName };