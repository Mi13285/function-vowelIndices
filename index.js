function vowelIndices(word) {
  vowels = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"];
  let arr = [];
  for (let i = 0; i < word.length; i++) {
    if (vowels.indexOf(word[i]) != -1) {
      arr.push(i + 1);
    }
  }
  return arr;
}
console.log(vowelIndices("apple"));
