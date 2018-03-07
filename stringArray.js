
function stringArray(arrStr){
  var newArr =arrStr.split(',')
  var arrResult=[]

  for (var i = 0; i < newArr.length; i++) {
      var letter = newArr[i]
      var tmp=[]
      arrResult.push(tmp);
    for (var j = 0; j < letter.length; j++) {
      //console.log(letter[j],j);
      tmp.push(letter[j])
      }
    }
  return arrResult;
}

console.log(stringArray('aqrst,ukaaei,ffooo'));
console.log(stringArray('qwer,tyuei,asdf,ghjk'));
