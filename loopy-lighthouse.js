function loopyLighthouse(range, multiples, words){
  var i = range[0];
  var firstDiv = multiples[0]
  var secondDiv = multiples[1]
  while (i <= range[1] ){
    if (i % firstDiv == 0 && i % secondDiv == 0){
      console.log(words[0] + words[1]);
    } else if (i % firstDiv == 0){
      console.log(words[0]);
    } else if (i % secondDiv == 0){
      console.log(words[1]);
    } else {
      console.log(i);
    }
    i++;
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
