function stringToArray(str){
  var strSplit= str.split(',');
  var strArr=[];

  for(let i=0; i<strSplit.length; i++){
    let wordSplit = strSplit[i].split("");
    strArr.push(wordSplit)
  }
  return strArr
}
console.log(stringToArray('aqrst,ukaei,ffooo'));
console.log(stringToArray('qwer,tyui,asdf,ghjk'));
