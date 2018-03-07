function stringToArray (words) {
    var tempWords = []
    var result = []

    for (var i = 0; i < words.length; i++) {
        
        tempWords.push(words[i])

        if (words[i+1] === ',') {

            i+=1
            result.push(tempWords)
            tempWords = []    
        }

    }
    result.push(tempWords)
    console.log(result)
}

stringToArray('aqrst,uakei,ffooo')
stringToArray('qwer,tyui,asdf,ghjk')

