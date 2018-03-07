function stringToArray(input) {

  let arr = []
  let isi = []
  let splitted = input.split(',')
  let joined = splitted.join('')

  for (let i = 0; i < joined.length; i++) {

    isi.push(joined[i])

    if (isi.length == splitted[0].length) {

      arr.push(isi)

      isi = []

      if (arr.length == splitted.length) {

        return arr

      }

    }


  }


}

console.log(stringToArray('aqrst,ukaei,ffooo'))
console.log(stringToArray('qwer,tyui,ghjk'))
