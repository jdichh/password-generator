const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialChars = ["/", "#", "$", "_", "-", "@", "%", "!", "?"];
const lowerLetters = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
const upperLetters = lowerLetters.map((letter) => letter.toUpperCase());
const generatedPasswordInput = document.getElementById("generated");

const passLength = document.querySelector("input[type=range]");
const allCheckBoxes = document.querySelectorAll("input[type=checkbox]");

const generatePassword = (length) => {
  const includeDigits = document.getElementById("includeDigits").checked;
  const specChars = document.getElementById("specChars").checked;
  const mixedCases = document.getElementById("mixedCases").checked;

  document.getElementById("spanPassLength").textContent = passLength.value; // updates the ps length in the UI

  let possiblePassword = []; // resets the possible password each time function runs
  generatedPasswordInput.value = "";

  if (includeDigits) {
    digits.forEach((digit) => {
      possiblePassword.push(digit);
    });
  }

  if (specChars) {
    specialChars.forEach((character) => {
      possiblePassword.push(character);
    });
  }

  if (mixedCases) {
    lowerLetters.forEach((lowerLetter) => {
      possiblePassword.push(lowerLetter);
    });
    upperLetters.forEach((upperLetter) => {
      possiblePassword.push(upperLetter);
    });
  } else {
    lowerLetters.forEach((lowerLetter) => {
      possiblePassword.push(lowerLetter);
    });
  }

};

generatePassword(passLength.value);

passLength.addEventListener("change", (evt) => {
  let value = evt.target.value;
  generatePassword(value);
});

allCheckBoxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    generatePassword(passLength.value);
  });
});