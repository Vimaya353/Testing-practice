
function capitalize(string) {
  if (string.length === 0) {
    return "";
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const calculator = {
  add: (a, b) => a + b,

  subtract: (a, b) => a - b,

  divide: (a, b) => a / b,

  multiply: (a, b) => a * b
};


function caesarCipher(string, shiftFactor) {
  const shift = ((shiftFactor % 26) + 26) % 26;

  return string
    .split("")
    .map((character) => {
      const code = character.charCodeAt(0);

      // Uppercase letters: A-Z
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(
          ((code - 65 + shift) % 26) + 65
        );
      }

      // Lowercase letters: a-z
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(
          ((code - 97 + shift) % 26) + 97
        );
      }

      // Keep spaces, punctuation, and other characters unchanged
      return character;
    })
    .join("");
}


export {
  capitalize,
  reverseString,
  calculator,
  caesarCipher
};
