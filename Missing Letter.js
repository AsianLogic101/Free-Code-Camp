function fearNotLetter(str) {
  var prev=str.charCodeAt(0);
  for (var i=1;i<str.length;i++){
    if (prev+1==str.charCodeAt(i)){
      prev=str.charCodeAt(i);
    }else {
      return String.fromCharCode(prev+1);
    }
  }
  return undefined;
}

fearNotLetter("abce");
