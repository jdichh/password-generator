const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialChars = ['/', '#', '$', '_', '-', '@', '%' ,'!', '?'];
const lowerLetters = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
const upperLetters = lowerLetters.map(letter => letter.toUpperCase());