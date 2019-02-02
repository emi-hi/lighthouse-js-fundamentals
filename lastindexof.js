function lastIndexOf(array, value){
  var y = -1;
  var i = 0;
  while (i < array.length){
    var x = (array[i]);
    if (x == value){
      y = i;
    }
    i++; //increment i
  }
  return y;
}


console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2));
