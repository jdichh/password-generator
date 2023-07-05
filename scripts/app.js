const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialChars = ["/", "#", "$", "_", "-", "@", "%", "!", "?"];
const lowerLetters = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
const upperLetters = lowerLetters.map((letter) => letter.toUpperCase());

const passLength = document.querySelector("input[type=range]");
const allCheckBoxes = document.querySelectorAll("input[type=checkbox]");

const generatePassword = (length) => {
    const includeDigits = document.getElementById('includeDigits').checked;
    const specChars = document.getElementById('specChars').checked;
    const mixedCases = document.getElementById('mixedCases').checked;

    document.getElementById('spanPassLength').textContent = passLength.value;
};

generatePassword(passLength.value);

passLength.addEventListener("change", evt => {
    let value = evt.target.value;
    generatePassword(value)
});

allCheckBoxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
        generatePassword(passLength.value);
    });
});
