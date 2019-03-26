var countSubstrings = function(s) {
  let count = s.length;

  const countPalindromesAt = (string, index, offset) => {
    let palindromesHere = 0;
    while (
      index >= 0 &&
      offset < string.length &&
      string[index] === string[offset]
    ) {
      palindromesHere++;
      index--;
      offset++;
    }

    return palindromesHere;
  };

  for (let char = 0; char < s.length; char++) {
    count +=
      countPalindromesAt(s, char, char + 1) +
      countPalindromesAt(s, char, char + 2);
  }
  return count;
};

// console.log(countSubstrings("aabbaa"));
console.log(countSubstrings("aabaa"));
