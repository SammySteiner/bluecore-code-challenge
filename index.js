// Question 1
// An isogram is a word that has no repeating letters, consecutive or non-consecutive, e.g. “pop” is not an isogram, but “orange” is. Implement a function that determines if the majority of words in a sentence are isograms. For example, in the sentence “You will enjoy this” the majority of words, “You”, “enjoy”, and “this”, are isograms. The function should accept one argument: a string that contains a single sentence.

function majorityIsogram(sentence){
  var sentenceArr = sentence.split(' ')
  var majorityOfWords = sentenceArr.length / 2
  var numberOfIsograms = isogramsInSentence(sentenceArr)

  return numberOfIsograms > majorityOfWords ? true : false
}

function isogramsInSentence(sentenceArr){
  var numberOfIsograms = 0
  sentenceArr.forEach( word => {
    if (isIsogram(word)) {
      numberOfIsograms += 1
    }
  })
  return numberOfIsograms
}

function isIsogram(word){
  var wordHash = hashWord(word)
  return allUniqueLetters(wordHash)
}

function hashWord(word){
  // used regex to remove any non alphanumeric characters that could trigger the allUniqueLetters validation, ie. if 'test' as a quote appeared in the string, or if a word was seperated out with em dashes.
  var letters = word.replace(/[^a-z0-9]/gi,'').split('')
  var wordHash = {}
  letters.forEach( l => {
    var letter = l.toLowerCase()
    wordHash[letter] ? wordHash[letter] += 1 : wordHash[letter] = 1
  })
  return wordHash
}

function allUniqueLetters(wordHash){
  for (var letter in wordHash) {
    if (wordHash.hasOwnProperty(letter)) {
      if (wordHash[letter] > 1) {
        return false
      }
    }
  }
  return true
}


// ---

// The following function is intended to convert text to “Cockney” speech. Consider the following examples: Given the string “hello there”, it should return the string “`ello there” Given the string “Well, hello there. How are you?”, it should return the string “Well, `ello there. `ow are you?” Does this function work as intended? If not, re-write the function to work properly and briefly explain how your solution differs from the provided code.

function cocknify(input) {
  return input.replace("h", "`");
}

function improvedCocknify(input) {
 return input.replace(/\sh/gi, ' `');
}

// explanation: the original method just looked for the first string 'h' in the string and replaced it with the '`' symbol. It failed for all subsequnt matches of 'h,' and if the first iteration of an 'h' was in the middle of a word, it would have replaced it. Finally, it was only looking for the lowercase letter 'h' and wouldn't match on an uppercase 'H.' The new and improved solution looks for an 'h' at the begining of a word by looking for a preceding space, it scans the entire string, and it is case insenstive. The only drawback is removing and returning the space character as well. A more percice method would be to convert the sentence to an array, loop over each word, look at only the first letter, and replace them if it was an 'h' or 'H', and return the array joined back into a string, however, this approach seems much simpler.
// ---

// Question 3
// Write a function, awesomeTree(height) that logs a tree of the correct height to the console. For example, awesomeTree(5) should console.log() the following, as a single string:
//      Ø
//     *|*
//    *|*|*
//   *|***|*
//  *|*****|*
// *|*******|*
// Pad the output with spaces so each line is the same length, with the last line having no spaces.

function awesomeTree(height){
  var string = ``
  var stars = '*'
  for (var i = 0; i < height + 1; i++) {
    // chose to chain if / else if statements rather than use a switch/case because switching on an evaluation (> 1) is much slower in browser than evaluating in an if statement. In general, I prefer the readability of switch/case statements.
    if (i === 0) {
      string += ' '.repeat(height - i) + 'Ø\n'
    } else if (i === 1) {
      string += ' '.repeat(height - i) + '*|*\n'
    } else {
      string += ' '.repeat(height - i) + '*|' + stars + '|*\n'
      stars += '**'
    }
  }
  console.log(string);
}
