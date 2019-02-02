function range(start, end, step){
  var some_array = [];
  if (!!end && !!step && start < end && step > 0){
    //if there is a value for end and step,
    //and start is less than end,
    //and step is more than 0
      for (var i = start; i <= end; i += step){
        //for i, between start and end, by step (for example 2 or 3s)
        some_array.push(i);
        //add i to the array
      }
  }else {
      some_array = [];
      }
  return some_array;
}
console.log(range(0, 8, 2));
