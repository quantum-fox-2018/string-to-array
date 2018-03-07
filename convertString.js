function StringArray (input){
  var result = [];
  var splitArray = input.split(",");
  for(var i = 0 ; i < splitArray.length ; i++){
    var tmp = [];
    for(var j = 0 ; j < splitArray[i].length ; j++){
      tmp.push(splitArray[i][j]);
    }
    result.push(tmp);
  }
  return result;
}

console.log(StringArray("aqrst,ukaei,ffooo"));
console.log(StringArray("qwer,tyui,asdf,ghjk"));
