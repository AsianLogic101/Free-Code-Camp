function pairwise(arr,arg){
  var value=0;
  for (var i=0;i<arr.length;i++){
    for (var j=1;j<arr.length;j++){
      if (arr[i]+arr[j]==arg && i!==j){
        value += (i+j);
        arr[i]=NaN;
        arr[j]=NaN;
      }
    }
  }
  return value;
}
pairwise([1, 3, 2, 4], 4);
