function rot13(str) {
  box=[];
  arr=str.split("");
  for (var i=0; i<arr.length;i++){
    code=arr[i].charCodeAt(0);
    if (65<=code && code<=90){
    code+=13;
      if (65<=code && code<=90){
        box.push(String.fromCharCode(code));  
      }else if (91<=code && code<=103){
        code-=26;
        box.push(String.fromCharCode(code));
    }}
    else{
      box.push(arr[i]);
    }
  }
  return box.join("");
}  
rot13("SERR PBQR PNZC");
