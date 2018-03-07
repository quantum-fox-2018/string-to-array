function stringToArray (str) {
  var arr = str.split(',');
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i].split(''));
  }

  return result;
}

console.log(stringToArray('aqrst,ukaei,ffooo'));
console.log(stringToArray('qwer,tyui,asdf,ghjk'));
