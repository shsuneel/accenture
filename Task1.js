import "./styles.css";
const task = `Task 1<br>
Given a string str and a dictionary dict containing a list of non-empty words,
add spaces in str to construct a 'sentence' where each word is a valid word in dict.
Return all possible sentences.<br>
There are no words in str which are not in the dict
(You are allowed to reuse the words in dict.)<br><br>
result:<br>`;


const result = (str, dict, sentences = [""]) => {
  const findWords = (str) => dict.filter((word) => str.startsWith(word));
  const words = findWords(str);
  if (str.length === 0 || words.length === 0) return sentences;

  return words.flatMap((word) => {
    const existingSentences = sentences.map((sentence) =>
      sentence ? sentence + " " + word : word
    );
    return result(str.slice(word.length), dict, existingSentences);
  });
};


const makeSentence = (str, dict) => result(str, dict);

const str = "penpineapplepenapple";
const dict = ["apple", "pen", "applepen", "pine", "pineapple"];
const sentences = makeSentence(str, dict);
console.log(sentences)