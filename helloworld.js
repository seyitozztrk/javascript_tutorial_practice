/*
var myName = 5 //work whole program
myName = 8

let ourName = "seyit's world" //only be use scope 
const pi = 3.14 //never change
var a=1;
var b=2;
var isIt = false;
var firstName = "Seyit";
var lastName = "Öztürk";


a++;
a-=2; //augmented minus 

var floatNumber = 2/0;
var remainder = 11%3;
var c = "1234567 dd \r1234567";
var c2 = ' "this\\ example \n is \tanother quote \' " ' ;
var c3 = 'hello\fdsada  \bworld'
console.log('******************************************************')
console.log(firstName +" "+ lastName);
console.log(c);
console.log(c2);
console.log(c3);
*/
/**
 CODE OUTPUT 
 \' -> single quote
 \" -> double quote 
 \\ -> one backslash
 \n -> newline 
 \r -> carriage return -> kendinden sonra kaç karakter var ise baştan
                       -> itibaren sayıp o karakterden sonrasını alıyor...
 \t -> tab 
 \b -> backspace  -> kendisinden sonra gelen kelimeyi bir boşluk geriye getirir.
 \f -> form feed -> aynı sütunsal hizada bir satır aşağıya iner. 
*/

var firstNameLength = 0;
var firstName = "Seyit Ahmet"

firstName[0] = "H";


firstNameLength = firstName.length
//console.log("my firstname's length is " + firstNameLength)
//console.log("first letter of first name is " + firstName[firstName.length - 1])

var ourArray = ["Seyit", 23, 2.3, true] //basic array 
var multiDimension = [ ["Ankara",06], ["İstanbul",34], ["Sakarya",54]]


ourArray[3] = false;
console.log("Access array element with using index= " + ourArray[3]);
console.log("Array size = " + ourArray.length)
console.log("Access multidimensional array with using index = " + multiDimension[0][1])

//add element to (last index)toarray 
multiDimension.push(["İzmir", 43], ["Ordu", 52])
console.log("Pushed array = " + multiDimension)
console.log("***************************")
//add element to first index an array 
ourArray.unshift(11);

//delete last element of array
var popped_values = ourArray.pop();
console.log(popped_values) 
console.log(ourArray)
console.log("*************************")
//delete first element of array
var shifted_value = multiDimension.shift();
console.log(shifted_value+"\n") 
console.log(multiDimension)


