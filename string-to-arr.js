function stringtoarr(str) {
  var arrstr = str.split(',')

  var hasil = []

  for (var i = 0; i < arrstr.length; i++) {
    var tmp = []
    for (var j = 0; j < arrstr[i].length; j++) {
      tmp.push(arrstr[i][j])
    }
    hasil.push(tmp)
  }

  return hasil
}

console.log(stringtoarr('aqrst,ukaei,ffooo'));
console.log(stringtoarr('qwer,tyui,asdf,ghjk'));
