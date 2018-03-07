function stringToArray(str) {
  str = str.split(',');
  let arrHasil = [];
  let strTmp;

  for(let i = 0; i < str.length; i++) {
    strTmp = str[i].split('');
    arrHasil.push(strTmp);
  }

  return arrHasil;
}

console.log(stringToArray("aqrst,ukaei,ffooo"));
