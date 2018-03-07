function stringToArray(strings){
    let stringSplit = strings.split(',')
    let bigWrapArr = []
    
    for(let r=0; r<stringSplit.length; r++){
        let arr = []
        let currWord = stringSplit[r]
        for(let c=0; c<currWord.length; c++){
            arr.push(currWord[c]);
            // console.log('--> '+currWord[c])
        }
        bigWrapArr.push(arr)
    }

    return bigWrapArr;
}


console.log(stringToArray('aqrst,ukaei,ffooo'))
console.log(stringToArray('qwer,tyui,asdf,ghjk'))