const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');

const file = path.join(`${__dirname}/../data/data.csv`);
const myData = [];

fs.createReadStream(file)
  .pipe(csv())
  .on('data', (row) => {
    myData.push(row);
  })
  .on('end', () => {
    console.log(myData[0]);
  });
