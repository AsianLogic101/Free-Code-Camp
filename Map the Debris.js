function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  for (var i=0;i<arr.length;i++){  
    var newArr= arr[i].avgAlt = Math.round (2 * Math.PI  * Math.pow ( Math.pow (       arr[i].avgAlt + earthRadius,3 ) / GM,0.5 ));
    delete arr[i].avgAlt;
    arr[i].orbitalPeriod = newArr;
  }
  return arr;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
