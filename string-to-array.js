function stringToArray (str){

  let strArray = [];
  let outputConvert = [];
  let strResult = '';
  for(let i=0;i<str.length;i++){

    strResult = strResult + str[i];

    if(str[i] == ',' || i == str.length-1){
      strArray.push(strResult);
      strResult = '';
    }
  }

  for(let i=0;i<strArray.length;i++){

    outputConvert.push([]);

    for(let j=0; j<strArray[i].length;j++){
      outputConvert[i].push(strArray[i][j]);
    }
  }

  return outputConvert;
}

console.log(stringToArray('aqrst,ukaeie,ffooo'));
