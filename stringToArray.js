
function getStringToArray(sentence){
  var splittedSentences = sentence.split(",");
  var resultArr = [];
  for (var i = 0; i < splittedSentences.length; i++) {
    var tempArr = [];
    for (var j = 0; j < splittedSentences[i].length; j++) {
      tempArr.push(splittedSentences[i][j])
    }
    resultArr.push(tempArr)
  }
  return resultArr;
}

console.log(getStringToArray("abcde,efghi,jklmn,opqrs"));
