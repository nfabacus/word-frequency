const readFile = require('./textToWordCounts/readFile');
// const readFileByLines = require('./readFileByLines');

readFile('files/mobydick.txt', (results) => console.log(results));
// readFileByLines('files/mobydick.txt', (results) => console.log(results));