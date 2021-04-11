// Function to generate an array of words from text data.
const generateWordsArr = (text) => text
  .replace(/[^a-zA-Z+]/g, ' ') // replace anything with a space except for alphabets.
  .replace(/\s+/g, ' ') // then, replace spaces with any length with just one space.
  .trim()
  .split(' '); // then, split the string by the spaces into an array.

// Function to generate WordCounts Object.
const generateWordCounts = (wordsArr) => wordsArr.reduce((acc, word)=>{
  if(word && word.trim()) {
    const lowerCaseWord = word.toLowerCase();
    if (acc[lowerCaseWord]) {
      acc[lowerCaseWord] +=1;
    } else {
      acc[lowerCaseWord] = 1;
    }
  }
  return acc;
}, {});

// Function to format wordCountsObj
const formatWordCounts = (wordCounts) => {
  return Object.entries(wordCounts)
    .sort((wordA, wordB) => {
      // Sort words by descending count order
      const countDiff = wordB[1] - wordA[1];
      if (countDiff !== 0) {
        return countDiff;
      }
      // If the counts of two words are identical, then sort the words by descending alphabetical order.
      if (wordA[0] < wordB[0]) {
        return 1;
      } else if (wordA[0] > wordB[0]) {
        return -1;
      }
      return 0;
    })
    .slice(0,20) // slice the list to top 20 items.
    .map(([word, count]) => `${count}: ${word}`).join('\n'); // finally format each word data to a string with a new line.
};

// Function to perform the above three functions at once and generate a result
const formatTextDataToWordCounts = (textData) => {
  const totalWordsArr = generateWordsArr(textData);
  const wordCounts = generateWordCounts(totalWordsArr);
  return formatWordCounts(wordCounts);
};

exports.generateWordsArr = generateWordsArr;
exports.generateWordCounts = generateWordCounts;
exports.formatWordCounts = formatWordCounts;
exports.formatTextDataToWordCounts = formatTextDataToWordCounts;
