function isValid(code) {
  const openersToClosers = {
    "{": "}",
    "[": "]",
    "(": ")"
  };

  const openers = new Set(Object.keys(openersToClosers));
  const closers = new Set(Object.values(openersToClosers));
  console.log(openers, closers);
  const openersStack = [];

  for (let i = 0; i < code.length; i++) {
    let char = code.charAt(i);
    if (openers.has(char)) {
      openersStack.push(char);
    } else if (closers.has(char)) {
      if (!openersStack.length) {
        return false;
      } else {
        let lastUnclosedOpener = openersStack.pop();

        // if this closer doesn't correspond to the most recently seen
        // unclosed opener, short-circuit, returning false
        if (openersToClosers[lastUnclosedOpener] !== char) {
          return false;
        }
      }
    }
  }
  return openersStack.length === 0;
}

console.log(isValid("{[]{}}"));
console.log(isValid("{[{}]}"));
console.log(isValid("{[{]}}"));
