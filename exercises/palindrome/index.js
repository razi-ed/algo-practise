// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// USE When stripping unnecessary chars from string is need
// function palindrome(str) {
//   return !str
//     .replace(/^[_a-zA-Z0-9]/g, '')
//     .split( '' )
//     .some( ( ele, i, arr) => arr[ ( arr.length -1 ) - i ] !== ele )
// }

// performs well in NOT Palindrome cases
// function palindrome(str) {
//   return !str
//     // .replace(/^[_a-zA-Z0-9]/g, '')
//     .split( '' )
//     .some( ( ele, i, arr) => arr[ ( arr.length -1 ) - i ] !== ele )
// }

//logically better, atleast for me
//if needed, split str into 2, if odd omit middle char, iterate through one half and check
function palindrome(str) {
  let iteretee;
  if ( str.length % 2 === 0 ) {
    iteretee = str.substring( ( str.length - 1 ) / 2 ).split('');
  } else {
    iteretee = str.substring( ( str.length - 2 ) / 2 ).split('');
  }
  return !iteretee
    .some( ( ele, i, arr) => arr[ ( arr.length - 1) - i] !== str[ i ] )
}

// const palindrome = ( str ) => {
//   return str.split('').reverse().join('') === str
// }

module.exports = palindrome;
