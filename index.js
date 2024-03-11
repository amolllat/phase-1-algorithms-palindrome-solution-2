function isPalindrome(word) {
  // Write your algorithm here
  for (let i = 0; i < word.length / 2; i++) {
    const obj = word.length - 1 - i;
    if (word[i] !== word[obj]) {
      return false;
    }
  }

  return true;
}

/* 
  Add your pseudocode here

  1. Define a function called isPalindrome that takes a single parameter: word.
  2. Iterate through half of the characters in the word:
   a. For each character at index i from the start, compare it with the character at the corresponding index from the end of the word.
   b. If the characters do not match, return false.
  3. If all characters match, return true, indicating that the word is a palindrome.

*/

/*
  Add written explanation of your solution here

  1. The function isPalindrome takes a word as input and checks whether it is a palindrome or not.
  2. The function iterates through the first half of the word's characters.
  3. For each character, it compares it with the corresponding character from the end of the word.
  4. If at any point the characters don't match, it returns false, indicating that the word is not a palindrome.
  5. If the iteration completes without finding any non-matching characters, it returns true, indicating that the word is a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
