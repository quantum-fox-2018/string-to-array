function stringToArray(string) {
  var arrayHasil = [];
  var array = [];
  for (var i = 0; i <= string.length - 1; i++) {
    array.push(string[i]);
    if (string[i + 1] == ',') {
      i += 1;
      arrayHasil.push(array);
      array = [];
    }
  }
  arrayHasil.push(array)
  return arrayHasil
}

console.log(stringToArray('aqrst,ukaei,ffooo'))
console.log(stringToArray('qwer,tyui,asdf,ghjk'))
