function stringToArray(str) {
  var kata = str.split(',');
  var hasil = [];

  for (var i = 0; i < kata.length; i++) {
    var row = [];
    for (var j = 0; j < kata[i].length; j++) {
      row.push(kata[i][j]);
    }
    hasil.push(row);
  }
  return hasil;
}

console.log(stringToArray('aqrst,ukaei,ffooo'));
console.log('', '');
console.log(stringToArray('qwer,tyui,asdf,ghjk'));
