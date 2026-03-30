function isValidBrackets(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(')');
    } else if (str[i] === '[') {
      stack.push(']');
    } else if (str[i] === '{') {
      stack.push('}');
    } else if (str[i] !== stack.pop()) {
      return false;
    }
  }
  return stack.length === 0;
}

console.log(isValidBrackets('(()[]{})'));
console.log(isValidBrackets('([]{][})'));
