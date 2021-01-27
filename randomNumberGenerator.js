function randomWholeNumber(){

    return Math.floor(Math.random() * 10);
    //generates bewtween 0(in) and 10(out) 
}

console.log(randomWholeNumber());

function randomRange(myMin, myMax) {

    return Math.floor(Math.random() * (myMax-myMin+1)) + myMin;
}

console.log(randomRange(7,15));