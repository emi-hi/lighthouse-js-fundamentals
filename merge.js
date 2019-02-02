function concat(array1, array2){
  var array_concat = [];
  var i = 0;
  while (i < array1.length) {
    array_concat.push(array1[i]);
    i++;
  }
  i = 0;
  while (i < array2.length){
    array_concat.push(array2[i]);
    i++;
  }
  return array_concat
}
function merge(array1, array2){
  var all_arrays = concat(array1, array2).sort();
  return all_arrays;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]));
