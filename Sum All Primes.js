function isPrime(num){
  if(num<=1){
    return false;
  }
  for(var i=2;i<num;i++){
    if(num%i===0){
      return false;
    }
  }return true; 
}  
function sumPrimes(num) {
  var factor=0;
  for (var i=1;i<=num;i++){
    if (isPrime(i)){
      factor+=i;
    }   
  }
  return factor;
}

sumPrimes(977);
