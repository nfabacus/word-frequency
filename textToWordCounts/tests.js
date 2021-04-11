const fs = require('fs');
const readFile = require('./readFile');
const readFileByLines = require('./readFileByLines');
const { generateWordsArr, generateWordCounts, formatWordCounts, formatTextDataToWordCounts } = require('./index');

const testText = `
  Hello   123 
   This is a test
  ***word is this. 
  --
  heLLo, this, this
abc
 
`;
const generatedWordsArr = generateWordsArr(testText);
const expectedWordsArr =  [ 'Hello', 'This', 'is', 'a', 'test', 'word', 'is', 'this', 'heLLo', 'this', 'this', 'abc' ];
const doesMatch = generatedWordsArr.every((word, i) => word === expectedWordsArr[i])
console.log('generateWordsArr: All the words match ', doesMatch);

const generatedWordCounts = generateWordCounts(expectedWordsArr);
const expectedWordCounts = { hello: 2, this: 4, is: 2, a: 1, test: 1, word: 1, abc: 1 };
console.log('generatedWordCounts: Generate a correct wordCounts object ', JSON.stringify(generatedWordCounts) === JSON.stringify(expectedWordCounts));

const formattedWordCounts = formatWordCounts(expectedWordCounts);
const expectedFormattedWordCounts = `4: this
2: is
2: hello
1: word
1: test
1: abc
1: a`;
console.log('formatWordCounts: Format wordCounts correctly', formattedWordCounts === expectedFormattedWordCounts);

const formattedWordCountsFromData = formatTextDataToWordCounts(testText);
console.log('formatTextDataToWordCounts: Generate wordCounts result correctly from text data at once ', formattedWordCountsFromData === expectedFormattedWordCounts);

readFile('files/text.txt', (results) => {
  fs.readFile('files/testResult1.txt', 'utf-8', (err, textData) => {
    console.log('readFile: Read text.txt file and transform the data as expected.', results === textData);
  });
});

readFileByLines('files/text.txt', (results) => {
  fs.readFile('files/testResult1.txt', 'utf-8', (err, textData) => {
    console.log('readFileByLines: Read text.txt file line by line, and transform the data as expected.', results === textData);
  });
});