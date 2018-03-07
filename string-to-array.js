function stringToArray (str){

  let strArray = str.split(',');
  let jumlahRow = strArray.length;
  let outputConvert = [];

  for(let i=0;i<jumlahRow;i++){

    outputConvert.push([]);

    for(let j=0; j<strArray[i].length;j++){
      outputConvert[i].push(strArray[i][j]);
    }
  }

  return outputConvert;
}

console.log(stringToArray('aqrst,ukaeie,ffooo'));
