
function getStringToArray(sentence){
  var splittedSentences = getSplitted(sentence)
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

function getSplitted(sentence){
  var arrResult = []
  sentence += ","
  var temp = ""
  for (var i = 0; i < sentence.length; i++) {
    if (sentence[i] === ",") {
      arrResult.push(temp)
      temp = ""
    }else{
      temp += sentence[i]
    }
  }
  console.log(arrResult);
  return arrResult
}

console.log(getStringToArray("abcde,efghi,jklmn,opqrs"));
