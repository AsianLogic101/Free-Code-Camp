function sym() {
  var args = Array.prototype.slice.call(arguments);
  
  function symdiff(args1,args2) {
    var final=[];
    args1.forEach(function(item) {
      if (args2.indexOf(item) < 0 && final.indexOf(item) < 0){
        final.push(item);
      }
    args2.forEach(function(item){
        if (args1.indexOf(item) <0 && final.indexOf(item) < 0) {
          final.push(item);
        }              
      }
    );});
    return final;
  }
  return args.reduce(symdiff);
}
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
