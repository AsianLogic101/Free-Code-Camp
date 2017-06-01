
function updateInventory(arr1, arr2) {
  var updatedInv=[];
  for(var i = 0; i < arr1.length; i++) {
    for(var j = 0; j < arr2.length; j++) {
      if (arr1[i][1] == arr2[j][1]) {
        arr1[i][0] = arr1[i][0] + arr2[j][0];
        updatedInv.push([arr1[i][0], arr1[i][1]]);
        arr1.splice(i,1);
        arr2.splice(j,1);
      }
    }
  }
  updatedInv = updatedInv.concat(arr1);
  updatedInv = updatedInv.concat(arr2);

  updatedInv.sort(function(a, b) {
    if (a[1] < b[1]) {
      return -1;
    }
    if (a[1] > b[1]) {
      return 1;
    }
    return 0;
    });
    return updatedInv;
}

updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], 
[0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], 
[1, "Bowling Ball"], [1, "Toothpaste"]]);
