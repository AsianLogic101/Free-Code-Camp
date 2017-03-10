d={
    'x':0,
    'y':0,
    'z':0
}

change=function(n){
    if (n==1){
        d.x+=1;
    }else if (n==2){
        d.x-=1;
    }else if (n==3){
        d.y+=1
    }else if (n==4){
        d.y-=1
    }else if (n==5){
        d.z+=1
    }else{
        d.z-=1
    }
}

for(var i=0;i<10000;i++){
    change(Math.ceil(Math.random()*6)); document.write('(',d.x,',',d.y,',',d.z,')<br>');
}
