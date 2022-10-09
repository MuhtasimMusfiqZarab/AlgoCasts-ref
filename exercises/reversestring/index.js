// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reverse().join('');
}

//another solution
function reverse1(str) {
  let revered = '';

  for (const character of str) {
    revered = character + revered;
  }

  return revered;
}

//another solution
function reverse2(str) {
  return str.split('').reduce((reversed, character) => {
    return character + reversed;
  }, '');
}

module.exports = reverse2;
