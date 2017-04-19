function slasher(arr, howMany) {
  if (arr.length<howMany){
    return [];
  }else{
    return arr.slice(howMany,arr.length);
}}

slasher([1, 2, 3], 2);
