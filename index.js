function convertArray(str) {
    // console.log(str.split(','));
    // console.log(str.split(',')[0].split(''))

    let arrWords = str.split(',');
    // console.log(arrWords.length);

    let arrResult = [];
    for (let i = 0; i < arrWords.length; i++) {
        arrResult.push(arrWords[i].split(''));
    }
    
    console.log(arrResult);

}

convertArray('aqrst,ukaei,ffooo');
