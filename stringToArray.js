function stringToArray(str) {
    str = str.split(',')
    let arr = []

    for(let i=0; i<str.length; i++) {
        arr.push(str[i].split(''))
    }
    
    return arr
}

var input = "aqrst,ukaei,ffooo"
console.log(stringToArray(input))

var input2 = "qwer,tyui,asdf,ghjk"
console.log(stringToArray(input2))