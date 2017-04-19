function translatePigLatin(str) {
  var vowel=["a","e","i","o","u"];
  for (var i=0;i<str.length;i++){
    for (var j=0;j<vowel.length;j++){
    var split=str.split("");
      if (split[i]==vowel[j]){
        if (split[0]==vowel[j]){
          return str+"way";
        }else{
        return str.substring(i)+str.substring(0,i)+"ay";
        }
      }
    }
  }
}

translatePigLatin("glove");
