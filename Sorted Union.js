function uniteUnique(arr) {
  var con =[];
  for (var i=0;i<arguments.length;i++){
    con= con.concat(arguments[i]);
  }
   var result = con.filter(function(item, pos) {
   return con.indexOf(item) == pos;
  });
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
