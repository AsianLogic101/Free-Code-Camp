function range(x){
    a=Math.max.apply(null,x);
    b=Math.min.apply(null,x);
    return a-b;
}
document.write("The range is ", range([18,15,6,15,19,5,40,20,15,68,26,12,6,40,28,33]) ,"<br>");

function mean(x){
    n=x.length;
    total=0;
    for (var i=0;i<x.length;i++){
        total=total+x[i];    
    }
    return Number((total*1.0/n).toFixed(2));

}
document.write("The mean is ", mean([18,15,6,15,19,5,40,20,15,68,26,12,6,40,28,33]) ,"<br>");

function mode(x) {
    var count = {};
    for (var i=0;i<x.length;i++){
        if (count.hasOwnProperty(x[i])){
            count[x[i]]+=1;
        }else{
            count[x[i]]=1;
        }
    }
    var keyList= Object.keys(count);
    var maxCount=0;
    for (var j=0;j<keyList.length;j++){
        if (count[keyList[j]]>maxCount){
            maxCount=count[keyList[j]];
        }
    }
    var modeKey=[];
    for (var q=0;q<keyList.length;q++){
        if (count[keyList[q]]==maxCount){
            modeKey.push(keyList[q]);
        }
    }
    if (modeKey.length==keyList.length){
        document.write("Null");
    }else{
        document.write("The mode is ", modeKey ,"<br>");
    }
}

mode([18,15,6,15,19,5,40,20,15,68,26,12,6,40,28,33])

function median(x) {
        x.sort(function(a,b){return a-b});
        var a=(x.length+1)*1.0/2 -1;
            
        if (Number.isInteger(a)){
            document.write("The median is ",x[a], "<br>");
        }else{
            var b=Math.ceil(a);
            var c=Math.floor(a);
            var d=(x[b]+x[c])*1.0/2;
            document.write("The median is ",d,"<br>");
        }
    
}
median([18,15,6,15,19,5,40,20,15,68,26,12,6,40,28,33])

function std_dev(x){
    m=mean(x)
    var t=0;
    for (var i=0;i<x.length;i++){
        t=t+(x[i]-m)*(x[i]-m);
    }
    var a=t/(n);
    var b=Math.sqrt(a);
    var c=b.toFixed(2);
    document.write("The standard deviation is ",c,"<br>");
}
std_dev([18,15,6,15,19,5,40,20,15,68,26,12,6,40,28,33])
