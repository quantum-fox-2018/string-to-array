function stringToArray(string) {
  var splitString = string.split(',');
  var arrayChar = [];

  for (let i in splitString) {
    splitChar = splitString[i].split('');
    arrayChar.push(splitChar);
  }

  return arrayChar;
}

console.log(stringToArray('aqrst,ukaei,ffooo'));
console.log(stringToArray('qwer,tyui,asdf,ghjk'));
