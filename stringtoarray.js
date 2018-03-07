function convertString(input){
  let board = [];
  let line = [];
  for(let i=0; i<input.length; i++){
    if(input[i]==','){
      board.push(line);
      line = [];
    } else {
      line.push(input[i]);
    }
  }
  board.push(line);
  return board;
}

console.log(convertString('aqrst,ukaei,ffooo'));
console.log(convertString('qwer,tyui,asdf,ghjk'));
