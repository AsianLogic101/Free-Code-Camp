function palindrome(str) {
  var newWord=str.toLowerCase().replace(/[^a-zA-Z0-9]/gi,"");
  console.log(newWord);
  if (newWord==newWord.split('').reverse().join("")){
    return true;
  }
  return false;
}

palindrome("Racecar");
