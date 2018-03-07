function toArray(str) {
  var words = str.split(",");
  var arrAlpha = [];
  for(var n = 0; n < words.length; n++) {
    arrAlpha.push(words[n].split(""));
  }
  console.log(arrAlpha);
}

toArray("aqrst,ukaei,ffooo");
toArray("qwer,tyui,asdf,ghjk");
