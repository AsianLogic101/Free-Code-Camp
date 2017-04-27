function dropElements(arr, func) {
  var newArr=arr.filter(func)[0];
  while (arr[0]!==newArr){
    arr.shift();
  }return arr; 
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3;});
