const db = require('../db/index.js');

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
        if (i.title === 'the' || 'of') {
          const temp = [i.title, 5];
          output.connector.push(temp);
        } else {
          const temp = [i.title, 2];
          output.connector.push(temp);
        }
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

  //  Connector
  const getConnector = () => {
    let connector = storage.connector;
    let total = 0;
    for (let i = 0; i < connector.length; ++i) {
      total += connector[i][1];
    }

    const threshold = Math.random() * total;
    total = 0;

    for (let i = 0; i < connector.length - 1; ++i) {
      total += connector[i][1];
      if (total >= threshold) {
        return connector[i][0];
      }
    }

    return connector[connector.length - 1][0];
  }

  const connector = getConnector();

  const lastOne = storage.lastOne[Math.floor(Math.random() * storage.lastOne.length)];
  const lastTwo = storage.lastTwo[Math.floor(Math.random() * storage.lastTwo.length)];

  return `${first} ${connector} ${lastOne} ${lastTwo}`;
};

module.exports = { genOrcName };