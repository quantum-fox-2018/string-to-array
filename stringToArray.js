function stringToArray(input){
  var inputSplit=input.split(',')
  var newArr=[]
  for (var i = 0; i < inputSplit.length; i++) {
    newArr.push([])
    for (var j = 0; j < inputSplit[i].length; j++) {
      newArr[i].push(inputSplit[i][j])
    }
  }
  return newArr
}
console.log(stringToArray("aqrst,ukaei,ffooo"));
console.log(stringToArray("qwer,tyui,asdf,ghjk"));
