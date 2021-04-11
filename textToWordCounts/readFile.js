const fs = require('fs');
const { formatTextDataToWordCounts } = require('./index');

module.exports = (filePath, cb) => {
  // read a file at once
  fs.readFile(filePath, 'utf-8', (err, textData) => {
    if (err) {
      console.error(err);
    } else {
      // format the text data with word counts and sends it back with the callback.
      const formattedWordCounts = formatTextDataToWordCounts(textData);
      cb(formattedWordCounts);
    }
  });
};