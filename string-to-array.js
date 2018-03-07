function StringtoArray(string){
  // console.log(string)
  var Strings = []
  var words = string.split(',')
  for(var i=0; i<words.length; i++){
    var hurufs = []
    var kata = words[i]
    for(var j=0; j<kata.length; j++ ){
      hurufs.push(kata[j])
    }
    Strings.push(hurufs)
  }
  return Strings
}
var string = 'akrst,ukaei,ffooo'
console.log(StringtoArray(string))
/*
input: 'akrst,ukaei,ffooo'
outpun:
[
  ['a','k','r','s','t'],
  ['u','k','a','e','i'],
  ['f','f','o','o','o'],
]
*/
