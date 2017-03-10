function primeChecker(number) {
    if (number === 0 || number === 1) {
        document.write(number, " is not prime, nor composite.");
        document.write("<br>")
    } else {
        var factor = 0;
        for (var i=1;i<number+1;i++){
            if (number%i==0){
                factor+=1;
            }   
        }
        if (factor == 2) {
            document.write(number, " is prime");
            document.write("<br>");
        } else {
            document.write(number, " is composite");
            document.write("<br>")
        }
    }
}
primeChecker(4);
primeChecker(17);
primeChecker(121);
primeChecker(5);
primeChecker(1);
