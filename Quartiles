function q1(x){
    x.sort(function(a,b){return a-b});
    var a=(x.length+1)*1.0/4-1;

   if(Number.isInteger(a)){
        return x[a];
    }else{
        return (x[Math.ceil(a)]+x[Math.floor(a)])*1.0/2;
    }
}
document.write(q1([-395,-101,1,2,3,4,5,6,7,109,118]), " is the first quartile <br>")

function q3(x){
    x.sort(function(a,b){return a-b});
    var c=(3.0*(x.length+1))/4-1;
    if(Number.isInteger(c)){
        return x[c];
    }else{
        return ((x[Math.ceil(c)]+[Math.floor(c)])*1.0)/2;
    }
}
document.write(q3([-395,-101,1,2,3,4,5,6,7,109,118]), " is the third quartile <br>")

function iqr(x){
    var p=q1(x);
    var o=q3(x);
    var u=q3(x)-q1(x);
    return u
}
function outlier_checker(x){
    outliers=[];
    regular=[];
    x.sort(function(a,b){return a-b});
    var u=(1.5*iqr(x))+q3(x);
    document.write(u," is the upper bound <br>");
    var l=q1(x)-(1.5*iqr(x));
    document.write(l," is the lower bound <br>");
    for (var i=0;i<x.length;i++){
        if (!(x[i]<=u && x[i]>=l)){
            outliers.push(x[i]);
        }else{
            regular.push(x[i]);
        }
    }
    document.write(outliers," are outliers <br> ",regular, " are regulars <br>")
}
outlier_checker([-395,-101,1,2,3,4,5,6,7,109,118])
