const fs = require('fs');
const readline = require('readline');
const { formatTextDataToWordCounts } = require('./index');

module.exports = (filePath, cb) => {
  const rd = readline.createInterface({
    input: fs.createReadStream(filePath, 'utf-8'),
    console: false
  });

  let totalTextData = '';

  rd.on('line', function(line) {
    // read each line of the file, and concatinate it with new line.
    totalTextData += line + '\n';
  }).on('close', function(line) {
    // After all the lines are read, format the total text data with word counts and sends it back with the callback.
    const formattedWordCounts = formatTextDataToWordCounts(totalTextData);
    cb(formattedWordCounts);
  });
};