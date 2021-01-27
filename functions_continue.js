/*function ourReusableFunction(a,b){
    console.log(a+b);
}

ourReusableFunction("Hello ", "Seyit");
*/

//declare global variable 
var myGlobal = 10;

function fun1(){
    oopsGlobal = 5;
    var sa = 1;
}

function fun2(){
    var output="";
    var myGlobal =20;
    if (typeof myGlobal != "undefined"){
        output += "myGlobal : " + myGlobal;
    }

    if (typeof oopsGlobal != "undefined"){
        output+= " oopsGlobal : " + oopsGlobal;
    }

    //console.log(output);
    return myGlobal;
}

fun1();
newGlobal = fun2();
//console.log(newGlobal);

//***************************************************** */
//next example 

function nextInLine(arr, item){
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
