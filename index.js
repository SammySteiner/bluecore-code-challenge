// Question 1
// An isogram is a word that has no repeating letters, consecutive or non-consecutive, e.g. “pop” is not an isogram, but “orange”
// is. Implement a function that determines if the majority of words in a sentence are isograms. For example, in the sentence
// “You will enjoy this” the majority of words, “You”, “enjoy”, and “this”, are isograms. The function should accept one argument:
// a string that contains a single sentence.

// ---

// Question 2
// The following function is intended to convert text to “Cockney” speech. Consider the following examples:
// Given the string “hello there”, it should return the string “`ello there”
// Given the string “Well, hello there. How are you?”, it should return the string “Well, `ello there. `ow are you?”
// Does this function work as intended? If not, re-write the function to work properly and briefly explain how your solution
// differs from the provided code.

function cocknify(input) {
  return input.replace("h", "`");
}

// ---

// Question 3
// Write a function, awesomeTree(height) that logs a tree of the correct height to the console.
// For example, awesomeTree(5) should console.log() the following, as a single string:
//      Ø
//     *|*
//    *|*|*
//   *|***|*
//  *|*****|*
// *|*******|*
// Pad the output with spaces so each line is the same length, with the last line having no spaces.
