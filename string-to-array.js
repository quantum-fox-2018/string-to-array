function stringToArray(string){
  var arrString = string.split(',');
  var arrResult = [];

  for(var i = 0; i < arrString.length; i++){
    var arrTmp    = [];
    for(var j = 0; j < arrString[i].length; j++){
        arrTmp.push(arrString[i][j]);
    }
    arrResult.push(arrTmp);
  }
  return arrResult;
}

console.log(stringToArray('aqrst,ukaei,ffooo'));

console.log(stringToArray('qwer,tyui,asdf,ghjk'));
