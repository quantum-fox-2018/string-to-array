function changeMe(str){
    let arrStr = [];
    let emptyStr = '';
    for(let counter =0; counter<str.length; counter++){
        if(str.charAt(counter) === ','){
            arrStr.push(emptyStr);
            emptyStr = '';
        }else{
            emptyStr+=str.charAt(counter)
        }
    }
    arrStr.push(emptyStr);
    
    let arrRes = [];
    let arrLetters = [];

    for(let counter = 0; counter<arrStr.length; counter++){
        arrLetters = [];
        for(let counter2 = 0; counter2 < arrStr[counter].length; counter2++){
            arrLetters.push(arrStr[counter].charAt(counter2));
        }
        arrRes.push(arrLetters);
    }

    return arrRes;
}

console.log(changeMe('aqrst,ukaei,ffooo'));
console.log(changeMe('qwer,tyui,asdf,ghjk'));
