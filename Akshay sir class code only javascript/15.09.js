// Ques1: Return number of vowels in a string
function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}

// Ques2: Return number of words in a string
function countWords(str) {
  return str.trim().split(/\s+/).length;
}

// Ques3: Return number of spaces in a string
function countSpaces(str) {
  return (str.split(" ").length - 1);
}

// Ques4: Return the longest word from a string
function longestWord(str) {
  let words = str.split(" ");
  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

// Ques5: Reverse the letters of the string
function reverseLetters(str) {
  return str.split("").reverse().join("");
}

// Ques6: Reverse the words of the string
function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

// Ques7: Identify if a name starts with a vowel
function startsWithVowel(name) {
  let first = name.trim()[0].toLowerCase();
  return "aeiou".includes(first);
}

// ------------------ Testing ------------------
let text = "this is java";

console.log("Vowels:", countVowels(text));          // Q1
console.log("Words:", countWords(text));            // Q2
console.log("Spaces:", countSpaces(text));          // Q3
console.log("Longest word:", longestWord(text));    // Q4
console.log("Reverse letters:", reverseLetters(text)); // Q5
console.log("Reverse words:", reverseWords(text));  // Q6
console.log("Starts with vowel?", startsWithVowel("apple")); // Q7