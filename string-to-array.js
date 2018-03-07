//String to Array

function stringToArray(kata){
    //cara 1: Tanpa mengganti kata ke array
    let arrResults = [];
    let tempArr = [];
    for(let i = 0; i < kata.length; i++){
        if(kata[i] !== ','){
            tempArr.push(kata[i]);
        }else{
            arrResults.push(tempArr);
            tempArr = [];
        }
    }

    arrResults.push(tempArr);

    return arrResults;

    //cara 2: Mengganti kata ke Array
    // let arrOfKata = kata.split(',');
    // let arrResults = [];
    // for(let i = 0; i < arrOfKata.length; i++){
    //     let tempArr = [];
    //     for(let j = 0; j < arrOfKata[i].length; j++){
    //         tempArr.push(arrOfKata[i][j]);
    //     }
    //     arrResults.push(tempArr);
    // }
    //
    // return arrResults;
}

//TEST CASE
console.log(stringToArray('aqrst,ukaei,ffooo'));
console.log(stringToArray('qwer,tyui,asdf,ghjk'));

//OTHER CASE
console.log(stringToArray('dani,damara,apalahk'));
