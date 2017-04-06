function whatIsInAName(collection, source) {
  var arr = [];
  var keys=Object.keys(source);
  for (var i=0;i<collection.length;i++){
    var element=true;
    for(var j=0;j<keys.length;j++){
      if (collection[i].hasOwnProperty(keys[j]) && source[keys[j]]==collection[i][keys[j]]){
        element=element && true;
      }else{
        element=false;
      }
    }
      if (element){
        arr.push(collection[i]);
      }   
  } 
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
