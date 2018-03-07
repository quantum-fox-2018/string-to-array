function stringToArr(str){
    let arrStr = str.split(',')
    let result = []

    for(let i=0; i<arrStr.length; i++){
        result.push([])
        for(let j=0; j<arrStr[i].length; j++){
            // console.log(arrStr[i][j])
            result[i].push(arrStr[i][j])
        }
    }

    console.log(result)
}

stringToArr('aqrst,ukaei,ffooo')
stringToArr('qwer,tyui,asdf,ghjk')