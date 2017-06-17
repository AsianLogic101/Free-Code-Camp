function permAlone(str){
  var regex = /(.)\1+/g;
  var permutations=[];
  var n=str.length;
  var arr=str.split('');
  
  function swap(idx_1,idx_2){
    tmp=arr[idx_1];
    arr[idx_1]=arr[idx_2];
    arr[idx_2]=tmp;
  }
  
  function generate(n){
  if (n===1){
    permutations.push(arr.join(''));
  }else{
    for(var i=0;i<=n-1;i++){
      generate(n-1);
      if(n%2===0){
        swap(i,n-1);
      }else{
        swap(0,n-1);
      }

    }
  } 
}
  generate(n);
  var filtered= permutations.filter(function(list){
    return !list.match(regex);
  });
  return filtered.length;
}  

permAlone("aaa");
