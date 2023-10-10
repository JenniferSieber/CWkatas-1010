// www.codewars.com
// KATA 1 7kyu
const removeUrlAnchor = str => str.split('#')[0];

console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'));

// KATA 2 7kyu
const sumDigits = num => 
  String(Math.abs(num)).split('')
    .reduce((acc, digit) => acc + digit, 0);

console.log(sumDigits(-32));

// KATA 3 7kyu
const alphabetPosition= str =>  str.replace(/[^a-zA-Z]/g, '').toUpperCase().split('').map(letter => letter.charCodeAt() - 64).join(' ');

console.log(alphabetPosition("The sunset sets at twelve o' clock."));

// KATA 4 7kyu
const number = array => array.map((letter, index) => `${index + 1}: ${letter}`);

console.log(number(["a", "b", "c"] ));

// // KATA 5 7kyu
const accum = s => s.toLowerCase().split('').map((l, index) => `${l.toUpperCase()}${l.repeat(index)}`).join('-');
  
console.log(accum("abcd"));

