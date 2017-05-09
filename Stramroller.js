function steamrollArray(arr) {
  var final=[];
  var untangle=function(element){
    if(Array.isArray(element)){
      for(var i=0;i<element.length;i++){
        untangle(element[i]);    
    }}
    else{
      final.push(element);
    }};
  untangle(arr);
  return final;
}

steamrollArray([1, [2], [3, [[4]]]]);
