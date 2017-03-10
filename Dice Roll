dice={
    'one':0,
    'two':0,
    'three':0,
    'four':0,
    'five':0,
    'six':0,
    'invalid':0
}
n=100000000;
for (var i=0;i<n;i++){
    roll=Math.ceil(Math.random()*6);
    if(roll==1){
        dice.one+=1;
    }else if(roll==2){
        dice.two+=1;
    }else if(roll==3){
        dice.three+=1;
    }else if(roll==4){
        dice.four+=1;
    }else if(roll==5){
        dice.five+=1;
    }else if (roll==6){
        dice.six+=1;
    }else {
        dice.invalid+=1;
    }
}

n=n-dice.invalid;
document.write('Out of ',n,' draws <br>');
document.write("Number of one is ",dice.one," and sample probability of one is ",dice.one*1.0/n,".<br>");
document.write("Number of two is ",dice.two," and sample probability/ of two is ",dice.two*1.0/n,".<br>");
document.write("Number of three is ",dice.three," and sample probability of three is ",dice.three*1.0/n,".<br>");
document.write("Number of four is ",dice.four," and sample probability of four is ",dice.four*1.0/n,".<br>");
document.write("Number of five is ",dice.five," and sample probability of five is ",dice.five*1.0/n,".<br>");
document.write("Number of sixe is ",dice.six," and sample probability of six is ",dice.six*1.0/n,".<br>");
