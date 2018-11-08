// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// not so simplistic
// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }

// my own
// function reverse(str) {
//   return str
//     .split('')
//     .reduce( ( acc, ele, i, arr) => {
//       acc[ ( arr.length - 1 ) - i ] = ele;
//       return acc;
//     },[])
//     .join('')
// }

// fancy
const reverse = (str) => str
    .split('')
    .reduce( ( acc, ele ) => acc = ele + acc , '' )

//more logical, simple and efficient
// function reverse(str) {
//   let reversed = '';
//   for (const iterator of str) {
//     reversed = iterator + reversed;
//   }
//   return reversed;
// }

module.exports = reverse;
