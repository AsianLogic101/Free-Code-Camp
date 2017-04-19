function pairElement(str) {
  var dna=[];
  var split=str.split("");
  var pair=["C","G","A","T"];
  for (var i=0;i<str.length;i++){
    if (str[i]=="G"){
      dna.push([split[i],pair[0]]);
    }else if(str[i]=="C"){
      dna.push([split[i],pair[1]]);
    }else if(str[i]=="T"){
      dna.push([split[i],pair[2]]);
    }else{
      dna.push([split[i],pair[3]]);
    }
  }return dna;
}

pairElement("GCG");
